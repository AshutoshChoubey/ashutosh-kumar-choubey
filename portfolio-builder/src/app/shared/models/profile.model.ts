export type SectionType =
  | 'hero'
  | 'about'
  | 'skills'
  | 'experience'
  | 'content'
  | 'education'
  | 'certifications';

export interface HeroContent {
  fullName: string;
  tagline: string;
  phone?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface AboutContent {
  summary: string;
  highlights?: string[];
  location?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface SkillCategoryItem {
  name: string;
  tags: string;
  badge?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: number;
  category?: string;
}

export interface SkillsContent {
  description?: string;
  skills?: SkillItem[];
  categories?: SkillCategoryItem[];
}

export interface ExperienceSubProject {
  client?: string;
  project?: string;
  technologies?: string[];
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  technologies?: string[];
  roleProjectText?: string;
  client?: string;
  project?: string;
  bullets?: string[];
  subProjects?: ExperienceSubProject[];
}

export interface ExperienceContent {
  items: ExperienceItem[];
}

export interface ContentCreationItem {
  id: string;
  title: string;
  channelOrPlatform: string;
  role: string;
  url?: string;
  period: string;
  description?: string;
  technologies?: string[];
  bullets: string[];
}

export interface ContentCreationContent {
  items: ContentCreationItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface EducationContent {
  items: EducationItem[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  url?: string;
  credentialId?: string;
}

export interface CertificationsContent {
  items: CertificationItem[];
}

export type SectionContent =
  | HeroContent
  | AboutContent
  | SkillsContent
  | ExperienceContent
  | ContentCreationContent
  | EducationContent
  | CertificationsContent
  | Record<string, any>;

/**
 * Strict schema for dynamic profile sections.
 */
export interface ProfileSection<T = SectionContent> {
  id: string;
  type: SectionType;
  title: string;
  content: T;
  displayOrder: number;
}

/**
 * Colorful & professional ATS-friendly resume data for Frontend Developer specializing in Angular & TypeScript.
 * No references to React or AI.
 */
export const DEFAULT_PROFILE_SECTIONS: ProfileSection[] = [
  {
    id: 'sec-hero-1',
    type: 'hero',
    title: 'Header & Contact',
    displayOrder: 1,
    content: {
      fullName: 'Ashutosh Kumar Choubey',
      tagline: 'Lead Frontend Developer | Angular & TypeScript Specialist',
      phone: '+91 9658476170',
      email: 'ashutoshkumarchoubey@gmail.com',
      linkedinUrl: 'https://linkedin.com/in/ashutosh-kumar-choubey',
      githubUrl: 'https://github.com/AshutoshChoubey',
      websiteUrl: 'https://me.worldgyan.com',
      location: 'Noida / Bangalore, India',
      bio: 'Senior Frontend Developer & Angular Specialist with 9+ years of experience architecting high-performance enterprise web applications and leading frontend engineering teams.'
    } as HeroContent
  },
  {
    id: 'sec-about-2',
    type: 'about',
    title: 'Professional Summary',
    displayOrder: 2,
    content: {
      summary:
        'Lead Frontend Developer with 9+ years of professional experience architecting robust, scalable enterprise web systems and leading frontend engineering squads. Deep specialization in modern Angular (v14–19, Standalone Components, Signals), TypeScript, RxJS, and NgRx state management. Proven track record of designing modular micro-frontend architectures, engineering reusable component design systems, elevating automated unit test coverage to 95%, and optimizing Core Web Vitals across mission-critical enterprise applications.'
    } as AboutContent
  },
  {
    id: 'sec-skills-3',
    type: 'skills',
    title: 'Core Tech Stack',
    displayOrder: 3,
    content: {
      categories: [
        {
          name: 'Frontend Frameworks & State',
          tags: 'Angular (v14–19), TypeScript, RxJS, NgRx, Angular Signals, Standalone Components, Angular Material, Reactive Forms'
        },
        {
          name: 'Languages & Web Standards',
          tags: 'TypeScript (Strict Mode), JavaScript (ES6+), HTML5, CSS3, SCSS/SASS, Responsive Web Design'
        },
        {
          name: 'Architecture & Performance',
          tags: 'Micro-frontends, Component-Driven Architecture, Lazy Loading, SSR, Web Performance, Core Web Vitals, RESTful API Integration'
        },
        {
          name: 'Testing & Code Quality',
          tags: 'Karma, Jasmine, Jest, Unit & Integration Testing, Code Reviews, Clean Code Architecture, CI/CD Quality Gates'
        },
        {
          name: 'Build, Tools & DevOps',
          tags: 'Webpack, Vite, Angular CLI, Git, GitHub Actions, npm, Docker, AWS (Solutions Architect Associate)'
        }
      ]
    } as SkillsContent
  },
  {
    id: 'sec-exp-4',
    type: 'experience',
    title: 'Work Experience',
    displayOrder: 4,
    content: {
      items: [
        {
          id: 'exp-1',
          company: 'GlobalLogic India Pvt. Ltd.',
          location: 'Noida, India',
          startDate: 'Jan 2022',
          endDate: 'Present',
          current: true,
          role: 'Senior Software Engineer & Frontend Lead',
          roleProjectText: 'Senior Software Engineer & Frontend Lead',
          technologies: ['Angular 19', 'TypeScript', 'RxJS', 'NgRx', 'Micro-frontends', 'Jasmine', 'Docker'],
          subProjects: [
            {
              client: 'Google LLC',
              project: 'Google DevShop',
              technologies: ['Angular 19', 'TypeScript', 'RxJS', 'NgRx', 'Jasmine', 'Karma', 'CI/CD'],
              bullets: [
                'Architect enterprise frontend solutions utilizing Angular 18/19 and TypeScript, designing reactive workflows with RxJS and NgRx state management.',
                'Lead and mentor a team of frontend engineers on clean architectural patterns, TypeScript best practices, and performance profiling.',
                'Resolve complex production issues across mission-critical enterprise platforms, driving automated test coverage from 45% to 95% using Jasmine and Karma.',
                'Establish rigorous code review standards and CI/CD validation gates to eliminate regression bugs and ensure high release velocity.'
              ]
            },
            {
              client: 'Ericsson Inc',
              project: 'BSS BAM',
              technologies: ['Angular 16', 'TypeScript', 'Micro-frontends', 'Docker', 'Kubernetes', 'Helm'],
              bullets: [
                'Architected Fault Management Systems and Network Topology visualization tools from the ground up using Angular 14–16 and TypeScript.',
                'Designed and decoupled 2 micro-frontend modules within a distributed microservices ecosystem to facilitate independent squad deployments.',
                'Engineered 5 shared UI component libraries in Angular, significantly accelerating feature development across global engineering squads.',
                'Streamlined build configurations and deployment manifests with Docker and Kubernetes to reduce pipeline turnaround times.'
              ]
            }
          ]
        },
        {
          id: 'exp-2',
          company: 'CodeClouds IT Solution Pvt. Ltd.',
          location: 'Kolkata, India',
          startDate: 'Sep 2019',
          endDate: 'Dec 2021',
          current: false,
          role: 'Senior Frontend Developer',
          roleProjectText: 'Senior Frontend Developer | Enterprise CRM Platform',
          technologies: ['Angular 10', 'TypeScript', 'Node.js', 'REST APIs', 'Agile'],
          bullets: [
            'Refactored legacy monolith modules into maintainable, high-throughput Angular and TypeScript applications.',
            'Delivered 12 consecutive enterprise milestone releases ahead of schedule through precise requirement refinement and sprint ownership.',
            'Engineered optimized data integration layers connecting multi-channel customer data to internal CRM backends via RESTful APIs.'
          ]
        },
        {
          id: 'exp-3',
          company: 'Navigators Software Pvt. Ltd.',
          location: 'Kolkata, India',
          startDate: 'May 2019',
          endDate: 'Sep 2019',
          current: false,
          role: 'Angular Developer',
          roleProjectText: 'Angular Developer | Client: Insight Retail Software Inc',
          technologies: ['Angular 7', 'TypeScript', 'POS Systems', 'Responsive UI'],
          bullets: [
            'Built responsive cross-platform retail POS single-page applications using Angular and TypeScript.',
            'Designed 15+ reusable UI components with responsive touch interactions optimized for diverse tablet and POS hardware form factors.'
          ]
        },
        {
          id: 'exp-4',
          company: 'Phoenix Software Solutions',
          location: 'Bhubaneswar, India',
          startDate: 'Oct 2018',
          endDate: 'May 2019',
          current: false,
          role: 'Software Developer',
          roleProjectText: 'Software Developer | Warehouse Stock Management System',
          technologies: ['Angular 7', 'TypeScript', 'Inventory Architecture'],
          bullets: [
            'Led a 5-developer engineering team delivering an Angular and TypeScript warehouse inventory tracking system with 90%+ on-time milestone delivery.',
            'Digitized manual inventory counting workflows, eliminating paper-based reporting delays and stock discrepancy rates.'
          ]
        },
        {
          id: 'exp-5',
          company: 'NetTantra Technology Pvt. Ltd.',
          location: 'Bhubaneswar, India',
          startDate: 'May 2017',
          endDate: 'Oct 2018',
          current: false,
          role: 'Application Developer',
          roleProjectText: 'Application Developer | Telemedicine Platform',
          technologies: ['Angular 5', 'TypeScript', 'SCSS', 'HTML5'],
          bullets: [
            'Engineered responsive telemedicine consultation portals using Angular and TypeScript for Karma Healthcare, decreasing user-reported onboarding issues by 25%.',
            'Implemented accessible, cross-browser web interfaces with HTML5, CSS3/SCSS, and modern JavaScript adhering to strict frontend compliance standards.'
          ]
        }
      ]
    } as ExperienceContent
  },
  {
    id: 'sec-content-5',
    type: 'content',
    title: 'YouTube & Content Creation',
    displayOrder: 5,
    content: {
      items: [
        {
          id: 'content-1',
          title: 'Angular & TypeScript Deep Dives',
          channelOrPlatform: 'YouTube & WorldGyan (me.worldgyan.com)',
          role: 'Technical Creator & Educator',
          url: 'https://me.worldgyan.com',
          period: '2020 – Present',
          description: 'Producing educational technical content and architectural deep-dives for the global frontend developer community.',
          technologies: ['Angular Signals', 'Standalone Architecture', 'RxJS', 'TypeScript', 'Video Production'],
          bullets: [
            'Produce detailed video tutorials and architectural guides covering modern Angular features (Signals, Standalone Architecture, RxJS state management, and performance tuning).',
            'Create hands-on code walkthroughs and open-source GitHub starter repositories referenced by thousands of frontend developers.',
            'Conduct community code-review sessions and technical interview preparation workshops focused on enterprise TypeScript and Angular architecture.'
          ]
        }
      ]
    } as ContentCreationContent
  },
  {
    id: 'sec-edu-6',
    type: 'education',
    title: 'Education',
    displayOrder: 6,
    content: {
      items: [
        {
          id: 'edu-1',
          institution: 'National Institute of Science and Technology (NIST)',
          degree: 'Bachelor of Technology (B.Tech) – Electrical & Electronics Engineering',
          location: 'Berhampur, Odisha, India',
          period: '2013 – 2017'
        }
      ]
    } as EducationContent
  },
  {
    id: 'sec-cert-7',
    type: 'certifications',
    title: 'Certifications',
    displayOrder: 7,
    content: {
      items: [
        {
          id: 'cert-1',
          title: 'AWS Certified Solutions Architect – Associate',
          issuer: 'Amazon Web Services',
          year: '2025',
          url: 'https://www.credly.com/badges/c3bfe5db-65ef-418c-a0a2-237a7fabefae',
          credentialId: 'c3bfe5db-65ef-418c-a0a2-237a7fabefae'
        },
        {
          id: 'cert-2',
          title: 'Angular – The Complete Guide (2021 Edition)',
          issuer: 'Udemy',
          year: '2021',
          url: 'https://www.udemy.com/certificate/UC-2b57992f-aff5-42c1-88c7-c9e9da0497fb/',
          credentialId: 'UC-2b57992f-aff5-42c1-88c7-c9e9da0497fb'
        },
        {
          id: 'cert-3',
          title: 'Certified AI Professional',
          issuer: 'GlobalLogic',
          year: '2026',
          url: 'https://glx.globallogic.com/certify/6c3d6223-d349-4ea6-828e-a4dee7fc6a65',
          credentialId: '6c3d6223-d349-4ea6-828e-a4dee7fc6a65'
        }
      ]
    } as CertificationsContent
  }
];
