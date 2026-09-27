export type ProjectCategory = 'enterprise' | 'opensource' | 'tutorial' | 'academic';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'youtube' | 'web' | 'demo';
}

export interface DetailedProject {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  client?: string;
  organization?: string;
  role: string;
  duration?: string;
  teamSize?: number | string;
  technologies: string[];
  description?: string;
  responsibilities: string[];
  links?: ProjectLink[];
  featured?: boolean;
}
