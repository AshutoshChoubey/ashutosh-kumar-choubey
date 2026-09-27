import { Component, Signal, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailedProject, ProjectCategory } from '../../../shared/models/project.model';
import { DETAILED_PROJECTS } from '../../../core/data/projects.data';
import { ProfileStateService } from '../../../core/services/profile-state.service';
import { HeroContent } from '../../../shared/models/profile.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  private readonly profileState = inject(ProfileStateService);

  // All source projects
  readonly allProjects = signal<DetailedProject[]>(DETAILED_PROJECTS);

  // Selected filter category ('all' | ProjectCategory)
  readonly activeCategory = signal<string>('all');

  // Search input query
  readonly searchQuery = signal<string>('');

  // Hero profile info for branding header
  readonly heroContent: Signal<HeroContent> = computed(() => {
    const hero = this.profileState.orderedSections().find((s) => s.type === 'hero');
    return (hero?.content as HeroContent) || {
      fullName: 'Ashutosh Kumar Choubey',
      tagline: 'Lead Frontend Developer | Angular & TypeScript Specialist',
      email: 'ashutoshkumarchoubey@gmail.com',
      phone: '+91 9658476170',
      linkedinUrl: 'https://linkedin.com/in/ashutosh-kumar-choubey',
      githubUrl: 'https://github.com/AshutoshChoubey',
      youtubeUrl: 'https://www.youtube.com/@worldgyan'
    };
  });

  // Filter categories definition with icons and counts
  readonly categories = computed(() => [
    { id: 'all', label: 'All Projects', icon: '⚡', count: this.allProjects().length },
    {
      id: 'enterprise',
      label: 'Enterprise Delivery',
      icon: '🏢',
      count: this.allProjects().filter((p) => p.category === 'enterprise').length
    },
    {
      id: 'opensource',
      label: 'Open Source & Repos',
      icon: '💻',
      count: this.allProjects().filter((p) => p.category === 'opensource').length
    },
    {
      id: 'tutorial',
      label: 'WorldGyan Video Series',
      icon: '🎥',
      count: this.allProjects().filter((p) => p.category === 'tutorial').length
    },
    {
      id: 'academic',
      label: 'Academic & Industrial',
      icon: '🎓',
      count: this.allProjects().filter((p) => p.category === 'academic').length
    }
  ]);

  // Filtered project list based on category and search query
  readonly filteredProjects = computed<DetailedProject[]>(() => {
    const category = this.activeCategory();
    const query = this.searchQuery().trim().toLowerCase();

    return this.allProjects().filter((project) => {
      // Category filter
      const matchesCategory = category === 'all' || project.category === category;
      if (!matchesCategory) return false;

      // Query filter (matches title, client, role, tech, responsibilities, or description)
      if (!query) return true;

      const titleMatch = project.title.toLowerCase().includes(query);
      const clientMatch = project.client?.toLowerCase().includes(query) ?? false;
      const orgMatch = project.organization?.toLowerCase().includes(query) ?? false;
      const roleMatch = project.role.toLowerCase().includes(query);
      const descMatch = project.description?.toLowerCase().includes(query) ?? false;
      const techMatch = project.technologies.some((t: string) => t.toLowerCase().includes(query));
      const respMatch = project.responsibilities.some((r: string) => r.toLowerCase().includes(query));

      return titleMatch || clientMatch || orgMatch || roleMatch || descMatch || techMatch || respMatch;
    });
  });

  // Statistics signals
  readonly totalProjectsCount = computed(() => this.allProjects().length);
  readonly enterpriseCount = computed(
    () => this.allProjects().filter((p) => p.category === 'enterprise').length
  );
  readonly openSourceCount = computed(
    () => this.allProjects().filter((p) => p.category === 'opensource').length
  );
  readonly videoSeriesCount = computed(
    () => this.allProjects().filter((p) => p.category === 'tutorial').length
  );

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  updateSearch(value: string): void {
    this.searchQuery.set(value);
  }

  clearFilters(): void {
    this.activeCategory.set('all');
    this.searchQuery.set('');
  }

  getCategoryBadgeClass(category: ProjectCategory): string {
    switch (category) {
      case 'enterprise':
        return 'cat-badge-enterprise';
      case 'opensource':
        return 'cat-badge-opensource';
      case 'tutorial':
        return 'cat-badge-tutorial';
      case 'academic':
        return 'cat-badge-academic';
      default:
        return 'cat-badge-default';
    }
  }

  getTechnologyColorClass(index: number): string {
    const colors = [
      'tech-pill-blue',
      'tech-pill-emerald',
      'tech-pill-indigo',
      'tech-pill-amber',
      'tech-pill-purple',
      'tech-pill-cyan',
      'tech-pill-teal'
    ];
    return colors[index % colors.length];
  }
}
