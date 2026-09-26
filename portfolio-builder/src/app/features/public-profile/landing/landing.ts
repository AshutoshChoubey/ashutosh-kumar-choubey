import {
  Component,
  Signal,
  computed,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileStateService } from '../../../core/services/profile-state.service';
import { AuthService } from '../../../core/services/auth';
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

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class Landing {
  readonly profileState = inject(ProfileStateService);
  readonly authService = inject(AuthService);

  // Canonical Signals
  readonly sections: Signal<ProfileSection[]> = computed(() =>
    this.profileState.orderedSections()
  );

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

  printResume(): void {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }
}
