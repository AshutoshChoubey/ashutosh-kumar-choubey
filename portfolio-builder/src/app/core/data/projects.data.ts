import { DetailedProject } from '../../shared/models/project.model';

export const DETAILED_PROJECTS: DetailedProject[] = [
  // 🏢 Enterprise Client Projects
  {
    id: 'proj-devshop',
    title: 'Google DevShop (Enterprise Developer Portal)',
    category: 'enterprise',
    categoryLabel: 'Enterprise On-Site Delivery',
    client: 'Google LLC (On-site Project)',
    organization: 'GlobalLogic India Pvt. Ltd.',
    role: 'Senior Software Engineer & Frontend Lead',
    duration: 'Jan 2022 – Present',
    featured: true,
    technologies: [
      'Angular 19',
      'TypeScript',
      'RxJS',
      'NgRx',
      'Jasmine',
      'Karma',
      'Micro-frontends'
    ],
    description:
      'Mission-critical developer enterprise portal designed for Google engineers and external partners, delivered on-site for Google LLC via GlobalLogic India Pvt. Ltd., streamlining project access, service discovery, and workflow automation.',
    responsibilities: [
      'Architect enterprise frontend solutions utilizing Angular 18/19 and TypeScript, designing reactive workflows with RxJS and NgRx state management.',
      'Lead and mentor a squad of frontend engineers on clean architectural patterns, TypeScript best practices, and performance profiling.',
      'Resolve complex production issues across mission-critical enterprise platforms, driving automated test coverage from 45% to 95% using Jasmine and Karma.',
      'Establish rigorous code review standards and automated testing gates to eliminate regression bugs and ensure high release velocity.'
    ]
  },
  {
    id: 'proj-bss-bam',
    title: 'BSS BAM (Fault Management & Topology Visualization)',
    category: 'enterprise',
    categoryLabel: 'Enterprise On-Site Delivery',
    client: 'Ericsson Inc (On-site Project)',
    organization: 'GlobalLogic India Pvt. Ltd.',
    role: 'Senior Software Engineer & Frontend Lead',
    duration: 'Jan 2022 – Present',
    featured: true,
    technologies: [
      'Angular 16',
      'TypeScript',
      'Micro-frontends',
      'RxJS',
      'Docker',
      'Kubernetes',
      'Helm Charts'
    ],
    description:
      'Telecommunications network topology and fault management ecosystem facilitating live cluster health diagnostics and automated incident resolution, delivered on-site for Ericsson Inc via GlobalLogic India Pvt. Ltd.',
    responsibilities: [
      'Architected Fault Management Systems and Network Topology visualization tools from the ground up using Angular 14–16 and TypeScript.',
      'Designed and decoupled 2 micro-frontend modules within a distributed microservices ecosystem to facilitate independent squad deployments.',
      'Engineered 5 shared UI component libraries in Angular, significantly accelerating feature development across global engineering squads.',
      'Streamlined build configurations and deployment manifests with Docker and Kubernetes to reduce pipeline turnaround times.'
    ]
  },
  {
    id: 'proj-unify',
    title: 'Unify Platform (Company Product)',
    category: 'enterprise',
    categoryLabel: 'Enterprise Platform & CRM',
    client: 'Codeclouds IT Solution Pvt. Ltd.',
    organization: 'Codeclouds IT Solution Pvt. Ltd.',
    role: 'Sr. Software Developer (Team Lead & Client Facing)',
    duration: 'Sep 2019 – Dec 2021',
    featured: true,
    technologies: [
      'Angular 8',
      'TypeScript',
      'RxJS',
      'JavaScript (ES6+)',
      'Node.js',
      'Web APIs',
      'HTML5/CSS3'
    ],
    description:
      'High-throughput unified enterprise commerce and CRM integration suite connecting multi-channel e-commerce storefronts directly to fulfillment backends.',
    responsibilities: [
      'Led Frontend development in Angular 8 and Backend API development using Node.js.',
      'Connected E-commerce site to CRM using Web APIs.',
      'Understood client requirements, delegated tasks among team members, and provided technical support.'
    ]
  },
  {
    id: 'proj-insight-retail',
    title: 'Retail POS Platform',
    category: 'enterprise',
    categoryLabel: 'Retail & Point of Sale',
    client: 'Insight Retail Software Inc',
    organization: 'Navigators Software Pvt. Ltd.',
    role: 'Angular Developer',
    duration: 'May 2019 – Sep 2019',
    technologies: [
      'Angular 7',
      'TypeScript',
      'RxJS',
      'Node.js',
      'POS Hardware Integration',
      'HTML5/SCSS',
      'Responsive UI'
    ],
    description:
      'Cross-platform retail point-of-sale single-page application optimized for hardware touch displays and barcode terminal peripherals.',
    responsibilities: [
      'Developed cross-platform retail point-of-sale applications using Angular 7, and NodeJS, enhancing UI responsiveness and improving user experience in collaboration with QA/UX teams.',
      'Optimized 15+ responsive UI components for various screen sizes and collaborated closely with QA and UX teams to resolve UI/UX defects.'
    ]
  },
  {
    id: 'proj-stock-mgmt',
    title: 'Stock Management System',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP & Inventory',
    client: 'B.C. Mohanty and Sons Pvt. Ltd.',
    organization: 'Phoenix Software Solutions',
    role: 'Senior Software Developer',
    duration: 'Oct 2018 – May 2019',
    teamSize: '5 Developers (Led Team)',
    featured: true,
    technologies: [
      'Angular 7',
      'TypeScript',
      'RxJS',
      'Node.js',
      'Electron JS',
      'REST APIs',
      'HTML5/SCSS'
    ],
    description:
      'Comprehensive warehouse inventory management desktop and web application digitizing warehouse stock audits, procurement, and tax reporting.',
    responsibilities: [
      'Led 5 developer team building Angular 7/Node.js stock management app, achieving 90% on-time delivery while resolving 25 production bugs.',
      'Delivered desktop and web solutions that eliminated manual stock tracking processes, reducing processing time and errors for warehouse operations.',
      'Coordinated sprint planning, task allocation, and code reviews across a team of five, maintaining consistent quality throughout the project lifecycle.'
    ]
  },
  {
    id: 'proj-edoctor',
    title: 'e-Doctor Platform (Telemedicine)',
    category: 'enterprise',
    categoryLabel: 'Healthcare & Telemedicine',
    client: 'Karma Healthcare',
    organization: 'NetTantra Technology Pvt. Ltd.',
    role: 'Application Developer',
    duration: 'Mar 2018 – Oct 2018',
    teamSize: '10 Developers',
    technologies: [
      'Angular 5',
      'TypeScript',
      'RxJS',
      'Node.js',
      'REST APIs',
      'Web APIs',
      'HTML5',
      'CSS3'
    ],
    description:
      'Web-based telemedicine consultation application connecting rural patients with urban doctors via remote video conferencing and real-time medical logs.',
    responsibilities: [
      'Enhanced a patient-doctor consultation platform using Angular 5 and Node.js, improving user engagement and reducing consultation wait times.',
      'Automated data validation workflows and improved API error handling, resulting in a 25% reduction in support tickets.'
    ]
  },
  {
    id: 'proj-ois',
    title: 'Online Information System (OIS)',
    category: 'enterprise',
    categoryLabel: 'Education & Institutional ERP',
    client: 'NIST',
    organization: 'NTCS (India) Pvt. Ltd.',
    role: 'Software Engineer',
    duration: 'May 2017 – Mar 2018',
    teamSize: '8 Developers',
    technologies: [
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Web APIs',
      'Responsive Design'
    ],
    description:
      'Innovative campus educational services platform connecting students, teachers, parents, and administrative management through centralized academic workflows.',
    responsibilities: [
      'Built responsive web interfaces using HTML5, CSS3, and JavaScript, ensuring cross-device compatibility and measurable improvements in user satisfaction scores.',
      'Documented and enforced frontend coding standards across the team, reducing release defects and improving long-term code maintainability for the project.'
    ]
  },
  {
    id: 'proj-sankalp-wiki',
    title: 'Sankalp Wiki (Employee Portal)',
    category: 'enterprise',
    categoryLabel: 'Corporate Intranet & HRMS',
    client: 'Sankalp Semiconductor',
    organization: 'NTCS (India) Pvt. Ltd.',
    role: 'Software Developer',
    duration: 'Jan 2018 – Apr 2018',
    teamSize: '7 Developers',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Web APIs'],
    description:
      'Internal corporate knowledgebase and HR portal streamlining employee records, leave administration, and internal policy documentation.',
    responsibilities: [
      'Developed an internal employee management system, focusing heavily on building the employee leave module.',
      'Built interactive leave request workflows, manager approval notifications, and balance calculation engines.',
      'Participated in sprint planning, testing phases, and client rollout walkthroughs.'
    ]
  },

  // 💻 Main Development Projects (Open Source & Full-Stack)
  {
    id: 'proj-daily-task-report',
    title: 'Daily Task Report Application',
    category: 'opensource',
    categoryLabel: 'Open Source Software',
    role: 'Full Stack Developer / Creator',
    technologies: ['Angular', 'Node.js', 'Express', 'Authentication', 'JWT'],
    featured: true,
    description:
      'A full-stack task management and reporting application built to track daily developer workflows securely.',
    responsibilities: [
      'Architected end-to-end task logging and workflow reporting pipelines for developer team accountability.',
      'Implemented secure JWT session authentication, password hashing, and role-based access control.',
      'Published open-source repository on GitHub for community reference.'
    ],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/AshutoshChoubey/AngularNodeAuthentication',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-mern-app',
    title: 'MERN Stack Application',
    category: 'opensource',
    categoryLabel: 'Full-Stack Architecture',
    role: 'Full Stack Developer / Creator',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    featured: true,
    description:
      'A standalone full-stack application leveraging the complete MERN ecosystem for high-performance data handling.',
    responsibilities: [
      'Built decoupled REST API services with Express.js and Node.js integrated with MongoDB document storage.',
      'Engineered interactive React client interfaces with reactive state management and optimistic UI updates.',
      'Containerized development environments and published the complete repository.'
    ],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/AshutoshChoubey/DTRnodeReact',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-django-react',
    title: 'Django REST & React CRUD',
    category: 'opensource',
    categoryLabel: 'Cross-Framework Architecture',
    role: 'Full Stack Developer & Educator',
    technologies: ['React', 'Django', 'Python', 'REST API', 'CRUD'],
    featured: true,
    description:
      'A seamless full-stack application demonstrating cross-framework integration with a Python backend and a React frontend.',
    responsibilities: [
      'Architected Django REST Framework serialization layers, model viewsets, and token-based authentication.',
      'Engineered clean React state management handling asynchronous API calls, error boundaries, and loading states.',
      'Published complete project source code and educational walkthroughs.'
    ],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/AshutoshChoubey/djangorestframeworkandreact',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-angular-gst',
    title: 'Angular GST Management',
    category: 'opensource',
    categoryLabel: 'Enterprise UI Application',
    role: 'Full Stack Developer / Creator',
    technologies: ['Angular', 'Tax Management', 'Enterprise UI'],
    featured: true,
    description:
      'A comprehensive legacy application for managing Goods and Services Tax (GST) data and reporting.',
    responsibilities: [
      'Engineered automated CGST, SGST, and IGST tax bracket calculators with strict decimal validation.',
      'Built multi-item line invoice generation interfaces with client auto-complete and printable formatting.',
      'Published open-source source repository on GitHub.'
    ],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/AshutoshChoubey/AngularGST',
        type: 'github'
      }
    ]
  },

  // 📺 YouTube Series & Open Source Contributions (WorldGyan)
  {
    id: 'proj-garage-management',
    title: 'Setting Up Garage Management Software on Your Local System - Step-by-Step Guide (Hindi)',
    category: 'tutorial',
    categoryLabel: 'Video Guide & Educational Release',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & System Architect',
    featured: true,
    technologies: [
      'Garage Management System',
      'Local Server Setup',
      'Database Configuration',
      'Full-Stack Architecture',
      'Educational Project'
    ],
    note: 'Notice: Currently, this project and its source package are available for educational purposes.',
    description:
      'A comprehensive step-by-step Hindi video walkthrough detailing how to install, configure, and execute a full-featured Garage Management Software system on a local workstation environment. Currently, this project is available for educational purposes.',
    responsibilities: [
      'Authored an end-to-end video tutorial in Hindi guiding developers through local environment prerequisites, local server installation, and database imports.',
      'Configured and demonstrated core garage management modules including vehicle job cards, service tracking, parts inventory, and billing.',
      'Packaged and published complete project files and database templates accessible via Google Drive for educational purposes.',
      'Provided step-by-step troubleshooting instructions for database connection parameters, server ports, and local file permissions.'
    ],
    links: [
      {
        label: 'Watch Step-by-Step Video (YouTube)',
        url: 'https://youtu.be/B0H-QhKv6Ak?si=R2CHZs4cXV2FUSb1',
        type: 'youtube'
      },
      {
        label: 'Download Project Files (Educational Use)',
        url: 'https://drive.google.com/file/d/1fvHAC8olqvnpjHUemZti4yalw_sQFm8C/view?usp=sharing',
        type: 'download'
      }
    ]
  },
  {
    id: 'proj-ts-prep',
    title: 'TypeScript Interview Preparation Series',
    category: 'tutorial',
    categoryLabel: 'Video Series & Open Source',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & Instructor',
    featured: true,
    technologies: ['TypeScript', 'Interview Prep', 'Open Source'],
    description:
      'A deep-dive video series and repository covering advanced TypeScript concepts, type safety, and common interview questions.',
    responsibilities: [
      'Authored in-depth guides covering generics, mapped types, conditional types, and strict type safety.',
      'Curated real-world engineering interview scenarios and step-by-step problem-solving tutorials.',
      'Maintained companion GitHub code repository referenced by candidates preparing for senior engineering roles.'
    ],
    links: [
      {
        label: 'YouTube Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucScrsRxbpDBzrjpdwTLsH8Bg',
        type: 'youtube'
      },
      {
        label: 'GitHub Repo',
        url: 'https://github.com/AshutoshChoubey/TypeScript-Interview-Preparation-Series',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-rxjs-tutorials',
    title: 'RxJS Tutorials',
    category: 'tutorial',
    categoryLabel: 'Video Series & Open Source',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & Instructor',
    featured: true,
    technologies: ['RxJS', 'Angular', 'Reactive Programming'],
    description:
      'Comprehensive guide to reactive programming in Angular using RxJS, covering observables, subjects, and operators.',
    responsibilities: [
      'Produced detailed video tutorials explaining higher-order mapping operators (switchMap, mergeMap, concatMap, exhaustMap).',
      'Demonstrated reactive state management, error handling, cancellation, and multicasting patterns in Angular.',
      'Published open-source example repositories showcasing practical real-world RxJS patterns.'
    ],
    links: [
      {
        label: 'YouTube Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSdxVbiveK1J-JfN4JOJH6AV',
        type: 'youtube'
      },
      {
        label: 'GitHub Repo',
        url: 'https://github.com/AshutoshChoubey/rxjs',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-js-interview',
    title: 'JavaScript Interview Questions & Advance JavaScript',
    category: 'tutorial',
    categoryLabel: 'Video Series & Open Source',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & Instructor',
    featured: true,
    technologies: ['JavaScript', 'ES6+', 'Interview Prep'],
    description:
      'Extensive resources covering core, advanced, and interview-level JavaScript concepts including closures, prototypes, and async programming.',
    responsibilities: [
      'Created multi-part playlists covering event loops, execution contexts, prototype chains, and asynchronous JavaScript.',
      'Authored comprehensive question banks covering tricky JavaScript edge cases and algorithmic concepts.',
      'Open-sourced companion GitHub repository with reproducible code snippets and explanations.'
    ],
    links: [
      {
        label: 'Advance JS Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSdD0l2TWbTj0NEBd_3WZQ7w',
        type: 'youtube'
      },
      {
        label: 'Interview JS Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSfNZVhAw-AMY0GS7wAZgecs',
        type: 'youtube'
      },
      {
        label: 'GitHub Repo',
        url: 'https://github.com/AshutoshChoubey/JavaScript-Interview-Questions',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-angular-masterclass',
    title: 'Angular Masterclass Series (v10 & v13)',
    category: 'tutorial',
    categoryLabel: 'Video Masterclass Series',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & Instructor',
    featured: true,
    technologies: ['Angular 10', 'Angular 13', 'Authentication', 'Frontend Architecture'],
    description:
      'End-to-end tutorials on Angular framework features, authentication flows, and version migrations (covering Angular 10 through 13).',
    responsibilities: [
      'Recorded comprehensive course modules explaining Angular module architecture, lifecycle hooks, and dependency injection.',
      'Engineered authentication flow guides implementing HTTP interceptors, route guards, and token refresh logic.',
      'Demonstrated smooth version migration techniques and modern architectural patterns across Angular releases.'
    ],
    links: [
      {
        label: 'Angular 13 Series',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSeXrIEWDzSCQBRPsurIc4l7',
        type: 'youtube'
      },
      {
        label: 'Angular 10 Series',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucScw_yJ78Fmd09sQ6GWGwuGb',
        type: 'youtube'
      },
      {
        label: 'Angular 10 Auth',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucScXrLlKxX6VeKBHJA79LokD',
        type: 'youtube'
      }
    ]
  },
  {
    id: 'proj-html-course',
    title: 'HTML Essential Course',
    category: 'tutorial',
    categoryLabel: 'Video Course',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & Instructor',
    technologies: ['HTML5', 'Web Standards', 'UI/UX'],
    description:
      'A foundational web development course focusing on modern HTML5 standards, semantic web, and accessibility.',
    responsibilities: [
      'Taught core principles of semantic markup, accessible document outlines, and forms.',
      'Guided aspiring developers through responsive design basics and modern web standards.',
      'Fostered a community of self-taught developers through video guides and feedback.'
    ],
    links: [
      {
        label: 'YouTube Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSf6z4OMEYH2_MO8xo4Umnu7',
        type: 'youtube'
      }
    ]
  },
  {
    id: 'proj-shopify-series',
    title: 'Shopify Video Series',
    category: 'tutorial',
    categoryLabel: 'Video Series',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & Instructor',
    technologies: ['Shopify', 'E-commerce', 'Liquid'],
    description:
      'Step-by-step guide to e-commerce development and store management using the Shopify platform.',
    responsibilities: [
      'Covered store setup, theme customization, and product management workflows.',
      'Explained Liquid templating engine basics and integration with custom styles.',
      'Mentored e-commerce entrepreneurs on store performance and checkout optimizations.'
    ],
    links: [
      {
        label: 'YouTube Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSfHLuBD6jyvmeJqSll7LSuI',
        type: 'youtube'
      }
    ]
  },
  {
    id: 'proj-additional-web-series',
    title: 'Additional Web Development Series',
    category: 'tutorial',
    categoryLabel: 'Video Series',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Technical Creator & Instructor',
    technologies: ['Web Development', 'Tutorials'],
    description:
      'Additional web development tutorials, architectural guides, and implementation walkthroughs.',
    responsibilities: [
      'Authored tutorials covering full-stack concepts, responsive layout tricks, and modern toolchains.',
      'Engaged with viewers through Q&A discussions and live problem-solving sessions.'
    ],
    links: [
      {
        label: 'YouTube Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSfTfh2A-TXnRjE9xYNvCfAN',
        type: 'youtube'
      }
    ]
  },

  // 🎓 Industrial Training & Academic Projects
  {
    id: 'proj-tata-steel',
    title: 'Electrical Protection System Study',
    category: 'academic',
    categoryLabel: 'Industrial Engineering Training',
    organization: 'TATA Steel Limited',
    client: 'Iron Making Electrical Maintenance Dept.',
    role: 'Engineering Trainee',
    duration: '30 Days Intensive Training',
    technologies: [
      'Electrical Protection Systems',
      'High Voltage Switchgear',
      'Relay Coordination',
      'Blast Furnace Systems',
      'Industrial Safety'
    ],
    description:
      'Comprehensive field study of the electrical protection system and high-voltage power distribution apparatus of the I Blast Furnace at TATA Steel Limited.',
    responsibilities: [
      'Studied the electrical protection system of the I Blast Furnace.',
      'Analyzed circuit breakers, numerical protection relays, and transformer isolation mechanisms.',
      'Observed safety interlocks, industrial emergency trip protocols, and backup generator transfer switches.'
    ]
  },
  {
    id: 'proj-bldc-motor',
    title: 'Sensor-less BLDC Motor Speed Control',
    category: 'academic',
    categoryLabel: 'Academic Engineering Project',
    organization: 'N.I.S.T, Berhampur (B.Tech Project)',
    client: 'Department of Electrical & Electronics Engineering',
    role: 'Project Researcher & Developer',
    duration: 'Academic Capstone Project',
    technologies: [
      'Electrical Machines',
      'Fuzzy Logic Controller',
      'BLDC Motors',
      'MATLAB/Simulink',
      'Sensor-less Speed Estimation'
    ],
    description:
      'Engineered an advanced sensor-less Brushless DC (BLDC) motor speed control system integrated with an intelligent FUZZY-based decision controller.',
    responsibilities: [
      'Developed a sensor-less BLDC motor speed control application integrated with a FUZZY-based system.',
      'Implemented back-EMF zero-crossing detection algorithms to eliminate physical Hall sensor requirements and reduce mechanical vulnerabilities.',
      'Conducted simulation modeling and hardware response benchmarking in MATLAB/Simulink.'
    ]
  }
];
