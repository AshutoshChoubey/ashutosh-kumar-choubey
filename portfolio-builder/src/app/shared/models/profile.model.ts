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
        'Lead Frontend Developer with 9+ years of solid experience architecting scalable enterprise frontend solutions, leading engineering squads, and mentoring developers through YouTube (WorldGyan). Deep specialization in modern Angular (v14–19, Standalone Components, Signals), TypeScript, Node.js, RxJS, and NgRx state management. Proven track record of designing modular micro-frontend architectures, engineering reusable design systems, and elevating automated unit test coverage to 95%.'
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
          name: 'Frameworks & Libraries',
          tags: 'Standalone Components, Angular Signals, Angular Material, Angular Forms, PrimeNG, RxJS'
        },
        {
          name: 'Languages & Web Standards',
          tags: 'HTML5, CSS3/SASS, JavaScript (ES6+), TypeScript, WCAG (Accessibility)'
        },
        {
          name: 'Architecture & Performance',
          tags: 'Micro-frontends, NgRx (State Management), Lazy Loading, Server-Side Rendering (SSR)'
        },
        {
          name: 'Testing & DevOps',
          tags: 'Robot Framework, GitHub Actions, Jest/Jasmine, Docker, Kubernetes'
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
              client: 'Google LLC (On-site Project)',
              project: 'Google DevShop',
              technologies: ['Angular 19', 'TypeScript', 'RxJS', 'NgRx', 'Jasmine', 'Karma'],
              bullets: [
                'Architect enterprise frontend solutions utilizing Angular 18/19 and TypeScript, designing reactive workflows with RxJS and NgRx state management.',
                'Lead and mentor a team of frontend engineers on clean architectural patterns, TypeScript best practices, and performance profiling.',
                'Resolve complex production issues across mission-critical enterprise platforms, driving automated test coverage from 45% to 95% using Jasmine and Karma.',
                'Establish rigorous code review standards and automated testing gates to eliminate regression bugs and ensure high release velocity.'
              ]
            },
            {
              client: 'Ericsson Inc (On-site Project)',
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
          roleProjectText: 'Angular Developer | Client: Insight Retail Software Inc | Project: Retail POS',
          technologies: ['Angular 7', 'TypeScript', 'Node.js', 'RxJS', 'REST APIs', 'HTML5/SCSS'],
          bullets: [
            'Developed cross-platform retail point-of-sale applications using Angular 7, and NodeJS, enhancing UI responsiveness and improving user experience in collaboration with QA/UX teams.',
            'Optimized 15+ responsive UI components for various screen sizes and collaborated closely with QA and UX teams to resolve UI/UX defects.'
          ]
        },
        {
          id: 'exp-4',
          company: 'Phoenix Software Solutions',
          location: 'Bhubaneswar, India',
          startDate: 'Oct 2018',
          endDate: 'May 2019',
          current: false,
          role: 'Senior Software Developer',
          roleProjectText: 'Senior Software Developer | Client: B.C. Mohanty and Sons Pvt. Ltd. | Project: Stock Management System',
          technologies: ['Angular 7', 'TypeScript', 'RxJS', 'Node.js', 'Electron JS', 'REST APIs', 'HTML5/SCSS'],
          bullets: [
            'Led 5 developer team building Angular 7/Node.js stock management app, achieving 90% on-time delivery while resolving 25 production bugs.',
            'Delivered desktop and web solutions that eliminated manual stock tracking processes, reducing processing time and errors for warehouse operations.',
            'Coordinated sprint planning, task allocation, and code reviews across a team of five, maintaining consistent quality throughout the project lifecycle.'
          ]
        },
        {
          id: 'exp-5',
          company: 'NetTantra Technology Pvt. Ltd.',
          location: 'Bhubaneswar, India',
          startDate: 'Mar 2018',
          endDate: 'Oct 2018',
          current: false,
          role: 'Application Developer',
          roleProjectText: 'Application Developer | Client: Karma Healthcare | Project: e-Doctor Platform',
          technologies: ['Angular 5', 'TypeScript', 'RxJS', 'Node.js', 'REST APIs', 'Web APIs', 'HTML5', 'CSS3'],
          bullets: [
            'Enhanced a patient-doctor consultation platform using Angular 5 and Node.js, improving user engagement and reducing consultation wait times.',
            'Automated data validation workflows and improved API error handling, resulting in a 25% reduction in support tickets.'
          ]
        },
        {
          id: 'exp-6',
          company: 'NTCS (India) Pvt. Ltd.',
          location: 'Berhampur, India',
          startDate: 'May 2017',
          endDate: 'Mar 2018',
          current: false,
          role: 'Software Engineer',
          roleProjectText: 'Software Engineer | Client: NIST | Project: Online Information System',
          technologies: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs', 'Web APIs', 'Responsive Design'],
          bullets: [
            'Built responsive web interfaces using HTML5, CSS3, and JavaScript, ensuring cross-device compatibility and measurable improvements in user satisfaction scores.',
            'Documented and enforced frontend coding standards across the team, reducing release defects and improving long-term code maintainability for the project.'
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
