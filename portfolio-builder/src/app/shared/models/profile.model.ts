export type SectionType =
  | 'hero'
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'certifications';

export interface HeroContent {
  fullName: string;
  tagline: string;
  phone?: string;
  email?: string;
  linkedinUrl?: string;
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
}

export interface CertificationsContent {
  items: CertificationItem[];
}

export type SectionContent =
  | HeroContent
  | AboutContent
  | SkillsContent
  | ExperienceContent
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
 * Exact portfolio resume data matching user's executive design.
 */
export const DEFAULT_PROFILE_SECTIONS: ProfileSection[] = [
  {
    id: 'sec-hero-1',
    type: 'hero',
    title: 'Header & Contact',
    displayOrder: 1,
    content: {
      fullName: 'Ashutosh Kumar Choubey',
      tagline: 'Senior Software Developer | Angular & Frontend Lead (React, Angular, AI)',
      phone: '+91 9658476170',
      email: 'ashutoshkumarchoubey@gmail.com',
      linkedinUrl: 'https://linkedin.com/in/ashutosh-kumar-choubey',
      websiteUrl: 'https://me.worldgyan.com',
      location: 'India',
      bio: 'Senior Software Developer & Frontend Lead with 9+ years of experience architecting scalable enterprise systems and leading frontend development teams.'
    } as HeroContent
  },
  {
    id: 'sec-about-2',
    type: 'about',
    title: 'Professional Summary',
    displayOrder: 2,
    content: {
      summary:
        'Senior Software Developer & Frontend Lead with 9+ years of experience architecting scalable enterprise systems and leading frontend development teams. Deep expertise across Angular (v5–21), React, TypeScript, NgRx, and RxJS. Certified in AWS and Artificial Intelligence, with extensive experience integrating modern AI-assisted workflows (GitHub Copilot, Google Gemini, LLMs) to accelerate delivery. Proven history of elevating unit test coverage up to 95%, establishing code quality frameworks, and delivering high-impact micro-frontend solutions for clients including Google LLC and Ericsson.'
    } as AboutContent
  },
  {
    id: 'sec-skills-3',
    type: 'skills',
    title: 'Technical Skills',
    displayOrder: 3,
    content: {
      categories: [
        {
          name: 'Frontend Technologies',
          tags: 'Angular (5–21), React, TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, RxJS, NgRx, Redux'
        },
        {
          name: 'AI & Modern Dev Tools',
          tags: 'AI-assisted development (GitHub Copilot, Google Gemini, Claude), LLM Integration, Prompt Engineering',
          badge: 'Certified AI Pro'
        },
        {
          name: 'Testing & Quality',
          tags: 'Karma, Jasmine, Jest, Unit & Integration Testing, Robot Framework, Test Automation'
        },
        {
          name: 'Backend Integration',
          tags: 'Node.js, Express.js, RESTful APIs, JSON, HTTP/HTTPS Protocols, WebSocket'
        },
        {
          name: 'Cloud & DevOps',
          tags: 'AWS, Docker, Kubernetes, Helm Charts, CI/CD Pipelines',
          badge: 'Solutions Architect'
        },
        {
          name: 'Architecture & Leadership',
          tags: 'Micro-frontends, Component-driven Architecture, Mentorship, Sprint Planning, Agile/Scrum'
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
          startDate: 'Jan 2022',
          endDate: 'Present',
          current: true,
          role: 'Senior Software Engineer & Frontend Lead',
          roleProjectText: 'Senior Software Engineer & Frontend Lead',
          subProjects: [
            {
              client: 'Google LLC',
              project: 'Google DevShop',
              bullets: [
                'Architected enterprise frontend solutions utilizing Angular 18, 19, 20, 21, designing high-performance reactive workflows with RxJS and NgRx state management.',
                'Mentored and coached junior/mid-level engineers on clean architecture, performance profiling, and modern JavaScript standards.',
                'Resolved complex production bugs across two mission-critical Google platforms, increasing automated unit test coverage from 45% to 95%.',
                'Enforced rigorous code review standards and CI validation gates, significantly decreasing post-deployment defect rates.'
              ]
            },
            {
              client: 'Ericsson Inc',
              project: 'BSS BAM',
              bullets: [
                'Architected Fault Management Systems and Network Topology visualization tools from scratch using Angular 13–16.',
                'Designed and decoupled 2 micro-frontend modules within a distributed microservices ecosystem.',
                'Authored 5 shared GUI component libraries in Angular, boosting code reusability across global squads.',
                'Configured build and deployment manifests with Bob, Kubernetes, and Helm charts to shorten release cycles.'
              ]
            }
          ]
        },
        {
          id: 'exp-2',
          company: 'CodeClouds IT Solution Pvt. Ltd.',
          startDate: 'Sep 2019',
          endDate: 'Dec 2021',
          current: false,
          role: 'Senior Web Developer',
          roleProjectText: 'Senior Web Developer | E-commerce to CRM Platform',
          bullets: [
            'Refactored legacy monolith modules using Angular 10 and Node.js into a maintainable, high-throughput enterprise platform.',
            'Shipped 12 major milestone releases ahead of schedule through agile requirement refinement and sprint ownership.',
            'Architected seamless data pipeline integrations linking multi-channel e-commerce stores to internal CRM databases.'
          ]
        },
        {
          id: 'exp-3',
          company: 'Navigators Software Pvt. Ltd.',
          startDate: 'May 2019',
          endDate: 'Sep 2019',
          current: false,
          role: 'Angular Developer',
          roleProjectText: 'Angular Developer | Client: Insight Retail Software Inc (Retail POS)',
          bullets: [
            'Engineered cross-platform single-page retail POS solutions using Angular 7 and Node.js.',
            'Optimized 15+ complex responsive UI components to ensure seamless touch interfaces across tablets and point-of-sale hardware.'
          ]
        },
        {
          id: 'exp-4',
          company: 'Phoenix Software Solutions',
          startDate: 'Oct 2018',
          endDate: 'May 2019',
          current: false,
          role: 'Senior Software Developer',
          roleProjectText: 'Senior Software Developer | Client: B.C. Mohanty and Sons (Stock Management)',
          bullets: [
            'Led a 5-developer engineering team delivering Angular 7 / Node.js warehouse inventory tracking systems with 90% on-time accuracy.',
            'Eliminated paper-based manual inventory workflows, reducing warehouse processing delays and inventory count discrepancies.'
          ]
        },
        {
          id: 'exp-5',
          company: 'NetTantra Technology Pvt. Ltd. & NTCS',
          startDate: 'May 2017',
          endDate: 'Oct 2018',
          current: false,
          role: 'Application Developer & Software Engineer',
          roleProjectText: 'Application Developer & Software Engineer',
          bullets: [
            'Engineered telemedicine consultation portals (Angular 5 / Node.js) for Karma Healthcare, reducing support inquiries by 25%.',
            'Built cross-browser web interfaces with HTML5, CSS3, and JavaScript adhering to strict frontend compliance guidelines.'
          ]
        }
      ]
    } as ExperienceContent
  },
  {
    id: 'sec-edu-5',
    type: 'education',
    title: 'Education',
    displayOrder: 5,
    content: {
      items: [
        {
          id: 'edu-1',
          institution: 'National Institute of Science and Technology (NIST)',
          degree: 'B.Tech – Electrical and Electronics Engineering',
          location: 'Berhampur, Odisha',
          period: '2013 – 2017'
        }
      ]
    } as EducationContent
  },
  {
    id: 'sec-cert-6',
    type: 'certifications',
    title: 'Certifications',
    displayOrder: 6,
    content: {
      items: [
        {
          id: 'cert-1',
          title: 'AWS Certified Solutions Architect – Associate',
          issuer: 'Amazon Web Services',
          year: '2025'
        },
        {
          id: 'cert-2',
          title: 'Certified AI Professional',
          issuer: 'GlobalLogic',
          year: '2026'
        },
        {
          id: 'cert-3',
          title: 'Angular – The Complete Guide',
          issuer: 'Udemy',
          year: '2021'
        }
      ]
    } as CertificationsContent
  }
];
