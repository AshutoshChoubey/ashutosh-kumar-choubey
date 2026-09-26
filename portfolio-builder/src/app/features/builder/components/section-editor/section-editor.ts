import {
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  input,
  output,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  AboutContent,
  ExperienceContent,
  ExperienceItem,
  HeroContent,
  ProfileSection,
  SectionType,
  SkillItem,
  SkillsContent
} from '../../../../shared/models/profile.model';

@Component({
  selector: 'app-section-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './section-editor.html',
  styleUrls: ['./section-editor.scss']
})
export class SectionEditorComponent {
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  // Inputs using modern Signal inputs
  readonly isOpen = input<boolean>(false);
  readonly mode = input<'create' | 'edit'>('create');
  readonly section = input<ProfileSection | null>(null);

  // Outputs using modern output emitter
  readonly close = output<void>();
  readonly save = output<Omit<ProfileSection, 'displayOrder'> & { displayOrder?: number }>();

  // Available section types
  readonly sectionTypes: { value: SectionType; label: string; icon: string; description: string }[] = [
    {
      value: 'hero',
      label: 'Hero Banner',
      icon: 'sparkles',
      description: 'Main introduction headline, bio, avatar, and call to action.'
    },
    {
      value: 'about',
      label: 'About Me',
      icon: 'user',
      description: 'Professional bio, key career highlights, and social links.'
    },
    {
      value: 'skills',
      label: 'Skills & Tech',
      icon: 'bolt',
      description: 'Categorized technical proficiencies with visual level meters.'
    },
    {
      value: 'experience',
      label: 'Work Experience',
      icon: 'briefcase',
      description: 'Chronological timeline of professional roles and achievements.'
    }
  ];

  // Active section type signal for conditional template rendering
  readonly activeType = signal<SectionType>('hero');

  // Main Reactive Form Group
  readonly form: FormGroup = this.fb.group({
    id: [''],
    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    type: ['hero' as SectionType, Validators.required],

    // Hero specific form group
    hero: this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      tagline: ['', [Validators.required]],
      bio: ['', [Validators.maxLength(1000)]],
      avatarUrl: [''],
      ctaText: [''],
      ctaLink: [''],
      location: ['']
    }),

    // About specific form group
    about: this.fb.group({
      summary: ['', [Validators.required, Validators.minLength(10)]],
      highlightsText: [''],
      location: [''],
      email: ['', [Validators.email]],
      githubUrl: [''],
      linkedinUrl: ['']
    }),

    // Skills specific form group
    skills: this.fb.group({
      description: [''],
      skillList: this.fb.array([])
    }),

    // Experience specific form group
    experience: this.fb.group({
      itemList: this.fb.array([])
    })
  });

  get skillList(): FormArray {
    return this.form.get('skills.skillList') as FormArray;
  }

  get itemList(): FormArray {
    return this.form.get('experience.itemList') as FormArray;
  }

  constructor() {
    // Synchronize activeType signal when form control changes
    this.form.get('type')?.valueChanges.subscribe((type: SectionType) => {
      if (type) {
        this.setActiveTypeControls(type);
      }
    });

    // Populate or reset form whenever section input changes
    effect(() => {
      const currentSection = this.section();
      const currentMode = this.mode();
      const open = this.isOpen();

      if (open) {
        if (currentMode === 'edit' && currentSection) {
          this.populateForm(currentSection);
        } else {
          this.resetFormToDefaults();
        }
      }
    });
  }

  // --- Activate Only Relevant Form Controls to Prevent Inactive Validation Blocking ---

  private setActiveTypeControls(type: SectionType): void {
    this.activeType.set(type);

    const typeGroups: SectionType[] = ['hero', 'about', 'skills', 'experience'];
    for (const t of typeGroups) {
      const grp = this.form.get(t);
      if (t === type) {
        grp?.enable({ emitEvent: false });
      } else {
        grp?.disable({ emitEvent: false });
      }
    }
  }

  // Check if current active section fields and title are valid
  isCurrentValid(): boolean {
    const titleControl = this.form.get('title');
    if (!titleControl || titleControl.invalid) {
      return false;
    }

    const type = this.activeType();
    const group = this.form.get(type);
    if (!group) return true;

    if (type === 'hero') {
      const h = group as FormGroup;
      return Boolean(h.get('fullName')?.valid && h.get('tagline')?.valid);
    }

    if (type === 'about') {
      const a = group as FormGroup;
      return Boolean(a.get('summary')?.valid);
    }

    if (type === 'skills') {
      return this.skillList.length > 0 && this.skillList.valid;
    }

    if (type === 'experience') {
      return this.itemList.length > 0 && this.itemList.valid;
    }

    return true;
  }

  // --- Form Population & Initialization ---

  private populateForm(section: ProfileSection): void {
    this.setActiveTypeControls(section.type);

    this.form.patchValue({
      id: section.id,
      title: section.title,
      type: section.type
    });

    // Clear dynamic arrays
    this.skillList.clear();
    this.itemList.clear();

    switch (section.type) {
      case 'hero': {
        const content = section.content as HeroContent;
        this.form.get('hero')?.patchValue({
          fullName: content.fullName || '',
          tagline: content.tagline || '',
          bio: content.bio || '',
          avatarUrl: content.avatarUrl || '',
          ctaText: content.ctaText || '',
          ctaLink: content.ctaLink || '',
          location: content.location || ''
        });
        break;
      }

      case 'about': {
        const content = section.content as AboutContent;
        this.form.get('about')?.patchValue({
          summary: content.summary || '',
          highlightsText: (content.highlights || []).join('\n'),
          location: content.location || '',
          email: content.email || '',
          githubUrl: content.githubUrl || '',
          linkedinUrl: content.linkedinUrl || ''
        });
        break;
      }

      case 'skills': {
        const content = section.content as SkillsContent;
        this.form.get('skills.description')?.setValue(content.description || '');
        if (content.skills && content.skills.length > 0) {
          content.skills.forEach((skill) => this.addSkill(skill));
        } else {
          this.addSkill({ name: 'Angular', level: 95, category: 'Frontend' });
        }
        break;
      }

      case 'experience': {
        const content = section.content as ExperienceContent;
        if (content.items && content.items.length > 0) {
          content.items.forEach((item) => this.addExperienceItem(item));
        } else {
          this.addExperienceItem({
            role: 'Angular Lead Developer',
            company: 'GlobalLogic',
            location: 'India',
            startDate: 'Jan 2022',
            endDate: 'Present',
            current: true,
            description: 'Leading frontend architecture and state management.'
          });
        }
        break;
      }
    }
  }

  private resetFormToDefaults(): void {
    this.form.reset({
      id: '',
      title: 'New Section',
      type: 'hero'
    });

    this.setActiveTypeControls('hero');
    this.skillList.clear();
    this.itemList.clear();

    // Default hero values
    this.form.get('hero')?.patchValue({
      fullName: 'Ashutosh Kumar Choubey',
      tagline: 'Angular Lead Developer',
      bio: 'Leading frontend architecture and enterprise applications.',
      avatarUrl: '',
      ctaText: 'View Projects',
      ctaLink: '#experience',
      location: 'India'
    });

    // Default about values
    this.form.get('about')?.patchValue({
      summary: 'Angular Lead Developer with 9+ years experience.',
      highlightsText: 'Led frontend architecture at Google DevShop\nArchitected systems at Ericsson Inc',
      location: 'India',
      email: 'ashutoshkumarchoubey@gmail.com',
      githubUrl: 'https://github.com/ashutosh-kumar-choubey',
      linkedinUrl: 'https://linkedin.com/in/ashutosh-kumar-choubey'
    });

    this.addSkill({ name: 'Angular (v5-21)', level: 98, category: 'Frontend' });
    this.addExperienceItem({
      role: 'Senior Software Engineer',
      company: 'GlobalLogic | Client: Google LLC',
      location: 'India',
      startDate: 'Jan 2022',
      endDate: 'Present',
      current: true,
      description: 'Led frontend architecture for Google DevShop using Angular 18-21.',
      technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS']
    });
  }

  // --- Dynamic Array Management ---

  addSkill(skill?: Partial<SkillItem>): void {
    const group = this.fb.group({
      id: [skill?.id || 'sk-' + Math.random().toString(36).substring(2, 7)],
      name: [skill?.name || '', [Validators.required]],
      level: [skill?.level ?? 85, [Validators.required, Validators.min(10), Validators.max(100)]],
      category: [skill?.category || 'Frontend']
    });
    this.skillList.push(group);
  }

  removeSkill(index: number): void {
    if (this.skillList.length > 1) {
      this.skillList.removeAt(index);
    }
  }

  addExperienceItem(item?: Partial<ExperienceItem>): void {
    const group = this.fb.group({
      id: [item?.id || 'exp-' + Math.random().toString(36).substring(2, 7)],
      role: [item?.role || '', [Validators.required]],
      company: [item?.company || '', [Validators.required]],
      location: [item?.location || ''],
      startDate: [item?.startDate || '', [Validators.required]],
      endDate: [item?.endDate || ''],
      current: [item?.current ?? false],
      description: [item?.description || '', [Validators.required]],
      technologiesText: [(item?.technologies || []).join(', ')]
    });
    this.itemList.push(group);
  }

  removeExperienceItem(index: number): void {
    if (this.itemList.length > 1) {
      this.itemList.removeAt(index);
    }
  }

  // --- Form Submission ---

  onSubmit(): void {
    if (!this.isCurrentValid()) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.getRawValue();
    const type: SectionType = this.activeType();

    let content: any = {};

    switch (type) {
      case 'hero': {
        const h = raw.hero || {};
        content = {
          fullName: h.fullName,
          tagline: h.tagline,
          bio: h.bio,
          avatarUrl: h.avatarUrl,
          ctaText: h.ctaText,
          ctaLink: h.ctaLink,
          location: h.location
        } as HeroContent;
        break;
      }

      case 'about': {
        const a = raw.about || {};
        const highlights = (a.highlightsText || '')
          .split('\n')
          .map((line: string) => line.trim())
          .filter((line: string) => line.length > 0);

        content = {
          summary: a.summary,
          highlights,
          location: a.location,
          email: a.email,
          githubUrl: a.githubUrl,
          linkedinUrl: a.linkedinUrl
        } as AboutContent;
        break;
      }

      case 'skills': {
        const s = raw.skills || {};
        const list = s.skillList || [];
        content = {
          description: s.description,
          skills: list.map((item: any) => ({
            id: item.id || 'sk-' + Math.random().toString(36).substring(2, 7),
            name: item.name,
            level: Number(item.level),
            category: item.category
          }))
        } as SkillsContent;
        break;
      }

      case 'experience': {
        const e = raw.experience || {};
        const list = e.itemList || [];
        content = {
          items: list.map((item: any) => ({
            id: item.id || 'exp-' + Math.random().toString(36).substring(2, 7),
            role: item.role,
            company: item.company,
            location: item.location,
            startDate: item.startDate,
            endDate: item.current ? 'Present' : item.endDate,
            current: Boolean(item.current),
            description: item.description,
            technologies: (item.technologiesText || '')
              .split(',')
              .map((t: string) => t.trim())
              .filter((t: string) => t.length > 0)
          }))
        } as ExperienceContent;
        break;
      }
    }

    const targetId = this.section()?.id || raw.id || '';

    const payload: Omit<ProfileSection, 'displayOrder'> & { displayOrder?: number } = {
      id: targetId,
      type,
      title: raw.title,
      content
    };

    this.save.emit(payload);
  }

  onCancel(): void {
    this.close.emit();
  }
}
