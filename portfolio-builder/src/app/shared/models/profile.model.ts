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
  youtubeUrl?: string;
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
      youtubeUrl: 'https://www.youtube.com/@worldgyan',
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
          company: 'Codeclouds IT Solution Pvt. Ltd.',
          location: 'Kolkata, India',
          startDate: 'Sep 2019',
          endDate: 'Dec 2021',
          current: false,
          role: 'Sr. Software Developer (Team Lead & Client Facing)',
          roleProjectText: 'Sr. Software Developer (Team Lead) | Project: Unify Platform (Company Product)',
          technologies: ['Angular 8', 'TypeScript', 'RxJS', 'JavaScript (ES6+)', 'Node.js', 'Web APIs', 'HTML5/CSS3'],
          bullets: [
            'Led Frontend development in Angular 8 and Backend API development using Node.js.',
            'Connected E-commerce site to CRM using Web APIs.',
            'Understood client requirements, delegated tasks among team members, and provided technical support.'
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
          technologies: ['Angular 7', 'TypeScript', 'RxJS', 'POS Hardware Integration', 'Responsive UI'],
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
          role: 'Sr. Software Developer / Full Stack Developer',
          roleProjectText: 'Sr. Software Developer / Full Stack Developer | Project: Stock Management System (Client: B.C Mohanty & Sons Pvt. Ltd.)',
          technologies: ['Angular 7', 'TypeScript', 'RxJS', 'JavaScript', 'Node.js', 'Electron JS', 'HTML/SCSS'],
          bullets: [
            'Developed a comprehensive system for managing the client’s Product, Purchase, Indent Report, Requisition Report, Sale, Stock, and GST.',
            'Led Frontend development in Angular 7 and Backend API development in Node.js, managing an 8-member engineering team.',
            'Created a Desktop Application using Electron JS.'
          ]
        },
        {
          id: 'exp-5',
          company: 'NetTantra Technology Pvt. Ltd.',
          location: 'Bhubaneswar, India',
          startDate: 'Apr 2018',
          endDate: 'Oct 2018',
          current: false,
          role: 'Application Developer',
          roleProjectText: 'Application Developer | Project: e-Doctor Clinic (Client: Karma Healthcare, India)',
          technologies: ['Angular 5', 'TypeScript', 'RxJS', 'JavaScript', 'jQuery', 'Ajax', 'PHP (CodeIgniter)', 'HTML', 'CSS'],
          bullets: [
            'Developed a web-based telemedicine application connecting rural patients with urban doctors via remote video conferencing (Team Size: 10).',
            'Managed patient records, prescriptions, payment reconciliations, and doctor information.',
            'Handled functional testing, database management, and bug life cycle resolution.'
          ]
        },
        {
          id: 'exp-6',
          company: 'NTCS India Pvt. Ltd.',
          location: 'Berhampur, India',
          startDate: 'May 2017',
          endDate: 'Apr 2018',
          current: false,
          role: 'Software Engineer',
          roleProjectText: 'Software Engineer | Projects: OIS & Sankalp Wiki',
          technologies: ['JavaScript', 'jQuery', 'Ajax', 'PHP', 'HTML', 'CSS', 'MySQL'],
          bullets: [
            'OIS (Client: N.I.S.T, Berhampur): Developed an innovative educational services platform connecting students, teachers, parents, and management (Team Size: 8; SIS & Work Log Entry).',
            'Sankalp Wiki (Client: Sankalp Semiconductor): Developed an internal employee management system, focusing heavily on building the employee leave module (Team Size: 7).'
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
          title: 'Angular, TypeScript & Full-Stack Architecture Tutorials',
          channelOrPlatform: 'WorldGyan (@worldgyan)',
          role: 'Founder & Technical Educator',
          url: 'https://www.youtube.com/@worldgyan',
          period: '2020 – Present',
          description:
            'Founder & creator of WorldGyan (@worldgyan), an educational technical YouTube channel and online learning platform (worldgyan.com) dedicated to delivering deep-dive tutorials on Angular, TypeScript, RxJS, and full-stack software development to over 25,000+ developers.',
          technologies: [
            'Angular (v14–19)',
            'TypeScript',
            'RxJS',
            'NgRx',
            'Full-Stack Architecture',
            'REST APIs',
            'Web Development'
          ],
          bullets: [
            'Produces structured multi-part video tutorial series on Angular (Signals, Standalone Components, RxJS reactive architectures, and NgRx state management), translating complex enterprise patterns into accessible practical lessons.',
            'Architects and open-sources production-ready application starter templates and project code repositories on GitHub and worldgyan.com.',
            'Delivers end-to-end full-stack software application guides (including management software architectures, server configuration, and RESTful API design).',
            'Engages actively with the global developer community through video guides, code reviews, and technical interview preparation sessions.'
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
          url: 'https://www.credly.com/badges/c3bfe5db-65ef-418c-a0a2-237a7fabefae'
        },
        {
          id: 'cert-2',
          title: 'Angular – The Complete Guide (2021 Edition)',
          issuer: 'Udemy',
          year: '2021',
          url: 'https://www.udemy.com/certificate/UC-2b57992f-aff5-42c1-88c7-c9e9da0497fb/'
        },
        {
          id: 'cert-3',
          title: 'Certified AI Professional',
          issuer: 'GlobalLogic',
          year: '2026',
          url: 'https://glx.globallogic.com/certify/6c3d6223-d349-4ea6-828e-a4dee7fc6a65'
        }
      ]
    } as CertificationsContent
  }
];
