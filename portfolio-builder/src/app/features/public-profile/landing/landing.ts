import {
  Component,
  ElementRef,
  Signal,
  computed,
  inject,
  viewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileStateService } from '../../../core/services/profile-state.service';
import { AuthService } from '../../../core/services/auth';
import { ResumeExportService } from '../../../core/services/resume-export.service';
import {
  AboutContent,
  CertificationsContent,
  ContentCreationContent,
  EducationContent,
  ExperienceContent,
  HeroContent,
  ProfileSection,
  SkillsContent
} from '../../../shared/models/profile.model';
import { SeoService } from '../../../core/services/seo.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class Landing implements OnInit {
  readonly profileState = inject(ProfileStateService);
  readonly authService = inject(AuthService);
  readonly exportService = inject(ResumeExportService);

  readonly resumeDoc = viewChild<ElementRef<HTMLElement>>('resumeDoc');

  readonly isGeneratingPdf = this.exportService.isGeneratingPdf;
  readonly isGeneratingDoc = this.exportService.isGeneratingDoc;

  // Canonical Signals
  readonly sections: Signal<ProfileSection[]> = computed(() =>
    this.profileState.orderedSections()
  );

  readonly seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateSeoTags({
      title: 'Ashutosh Kumar Choubey | Senior Software Developer Resume',
      description: 'Senior Software Developer and Angular Architect with 9+ years of experience building scalable enterprise applications. Expertise in Angular, TypeScript, and Node.js.',
      keywords: 'Ashutosh Kumar Choubey, Angular Architect, Senior Software Developer, TypeScript, Node.js, MERN stack, GlobalLogic, Google DevShop',
      url: 'https://ashutoshchoubey.github.io/',
      author: 'Ashutosh Kumar Choubey',
      schema: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ashutosh Kumar Choubey",
        "url": "https://ashutoshchoubey.github.io/",
        "jobTitle": "Lead Frontend Developer",
        "sameAs": [
          "https://linkedin.com/in/ashutosh-kumar-choubey",
          "https://github.com/AshutoshChoubey",
          "https://www.youtube.com/@worldgyan"
        ]
      }
    });
  }

  readonly isAuthenticated: Signal<boolean> = computed(() =>
    this.authService.isAuthenticated()
  );

  // Computed Section Extractors for the ATS-Friendly Single-Column Layout
  readonly heroSection = computed(() =>
    this.sections().find((s) => s.type === 'hero')
  );
  readonly heroContent = computed<HeroContent>(() =>
    (this.heroSection()?.content as HeroContent) || {}
  );

  readonly aboutSection = computed(() =>
    this.sections().find((s) => s.type === 'about')
  );
  readonly aboutContent = computed<AboutContent>(() =>
    (this.aboutSection()?.content as AboutContent) || { summary: '' }
  );

  readonly skillsSection = computed(() =>
    this.sections().find((s) => s.type === 'skills')
  );
  readonly skillsContent = computed<SkillsContent>(() =>
    (this.skillsSection()?.content as SkillsContent) || {}
  );

  readonly experienceSection = computed(() =>
    this.sections().find((s) => s.type === 'experience')
  );
  readonly experienceContent = computed<ExperienceContent>(() =>
    (this.experienceSection()?.content as ExperienceContent) || { items: [] }
  );

  readonly contentSection = computed(() =>
    this.sections().find((s) => s.type === 'content')
  );
  readonly contentCreation = computed<ContentCreationContent>(() =>
    (this.contentSection()?.content as ContentCreationContent) || { items: [] }
  );

  readonly educationSection = computed(() =>
    this.sections().find((s) => s.type === 'education')
  );
  readonly educationContent = computed<EducationContent>(() =>
    (this.educationSection()?.content as EducationContent) || { items: [] }
  );

  readonly certificationsSection = computed(() =>
    this.sections().find((s) => s.type === 'certifications')
  );
  readonly certificationsContent = computed<CertificationsContent>(() =>
    (this.certificationsSection()?.content as CertificationsContent) || { items: [] }
  );

  /**
   * Transforms comma-delimited strings or string arrays into individual tag arrays.
   */
  splitTags(tags: string | string[] | undefined): string[] {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    return tags.split(',').map((t) => t.trim()).filter(Boolean);
  }

  /**
   * Assigns colorful theme class per skill category.
   */
  getCategoryTheme(index: number): string {
    const themes = [
      'tag-theme-blue',
      'tag-theme-emerald',
      'tag-theme-purple',
      'tag-theme-amber',
      'tag-theme-cyan'
    ];
    return themes[index % themes.length];
  }

  /**
   * Returns a branded issuer badge class.
   */
  getIssuerBadgeClass(issuer: string): string {
    const lower = issuer?.toLowerCase() || '';
    if (lower.includes('amazon') || lower.includes('aws')) return 'badge-aws';
    if (lower.includes('udemy')) return 'badge-udemy';
    if (lower.includes('global')) return 'badge-globallogic';
    return 'badge-default';
  }

  logout(): void {
    this.authService.logout();
  }

  async downloadPdf(): Promise<void> {
    const el =
      this.resumeDoc()?.nativeElement ||
      (typeof document !== 'undefined'
        ? (document.querySelector('.resume-page') as HTMLElement)
        : null);
    if (!el) return;

    await this.exportService.downloadPdf(el, 'Ashutosh_Kumar_Choubey_9+_Years_of_Experience_Senior_Frontend_Engineer.pdf');
  }

  downloadDoc(): void {
    this.exportService.downloadDoc(
      {
        hero: this.heroContent(),
        about: this.aboutContent(),
        skills: this.skillsContent(),
        experience: this.experienceContent(),
        contentCreation: this.contentCreation(),
        education: this.educationContent(),
        certifications: this.certificationsContent()
      },
      'Ashutosh_Kumar_Choubey_9+_Years_of_Experience_Senior_Frontend_Engineer.doc'
    );
  }

  printResume(): void {
    this.exportService.print();
  }
}
