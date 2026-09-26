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

  // Computed Section Extractors for the Resume Layout
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

  logout(): void {
    this.authService.logout();
  }

  printResume(): void {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }
}

