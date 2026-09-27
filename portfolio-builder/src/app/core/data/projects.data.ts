import { DetailedProject } from '../../shared/models/project.model';

export const DETAILED_PROJECTS: DetailedProject[] = [
  // 🏢 Enterprise & Professional Client Projects
  {
    id: 'proj-devshop',
    title: 'Google DevShop (Enterprise Developer Portal)',
    category: 'enterprise',
    categoryLabel: 'Enterprise Client Delivery',
    client: 'Google LLC',
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
      'Micro-frontends',
      'CI/CD'
    ],
    description:
      'Mission-critical developer enterprise portal designed for Google engineers and external partners, streamlining project access, service discovery, and workflow automation.',
    responsibilities: [
      'Architect enterprise frontend solutions utilizing Angular 18/19 and TypeScript, designing reactive workflows with RxJS and NgRx state management.',
      'Lead and mentor a squad of frontend engineers on clean architectural patterns, TypeScript best practices, and performance profiling.',
      'Resolve complex production issues across mission-critical enterprise platforms, driving automated test coverage from 45% to 95% using Jasmine and Karma.',
      'Establish rigorous code review standards and CI/CD validation gates to eliminate regression bugs and ensure high release velocity.'
    ]
  },
  {
    id: 'proj-bss-bam',
    title: 'BSS BAM (Fault Management & Topology Visualization)',
    category: 'enterprise',
    categoryLabel: 'Enterprise Client Delivery',
    client: 'Ericsson Inc',
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
      'Telecommunications network topology and fault management ecosystem facilitating live cluster health diagnostics and automated incident resolution.',
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

  // 💻 Open Source & GitHub Projects
  {
    id: 'proj-daily-task-report',
    title: 'Daily Task Report (Angular & MERN)',
    category: 'opensource',
    categoryLabel: 'Open Source Software',
    role: 'Full Stack Developer / Creator',
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'React.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB'
    ],
    featured: true,
    description:
      'A timesheet and task reporting application originally built in Angular 7 years ago, and recently completely rebuilt utilizing the modern React + Node.js (MERN) stack.',
    responsibilities: [
      'Engineered complete daily work log tracking, milestone hour submission, and automated team supervisor approval workflows.',
      'Implemented JWT session authentication, MongoDB aggregate pipeline analytics, and CSV report export.',
      'Published open-source repositories for both the original Angular architecture and the updated MERN full-stack edition.'
    ],
    links: [
      {
        label: 'Angular Repository',
        url: 'https://github.com/AshutoshChoubey/dailyTaskReport',
        type: 'github'
      },
      {
        label: 'MERN Repository (React + Node)',
        url: 'https://github.com/AshutoshChoubey/DTRnodeReact',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-laravel-blog',
    title: 'Laravel 12 Blog Management System',
    category: 'opensource',
    categoryLabel: 'Open Source Software',
    role: 'Backend Developer / Creator',
    technologies: ['Laravel 12', 'PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'Blade'],
    featured: true,
    description:
      'A complete modern blog management system built utilizing the latest features of Laravel 12, featuring dynamic content publishing and administrative dashboards.',
    responsibilities: [
      'Implemented clean MVC patterns leveraging Laravel 12 Eloquent ORM, database migrations, and seeded data fixtures.',
      'Built article categorization, markdown/rich-text publishing engines, slug generators, and role-based permissions.',
      'Open-sourced the full project codebase on GitHub for educational and production reference.'
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/AshutoshChoubey/laravel12BlogManage',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-angular-gst',
    title: 'Angular GST Management Application',
    category: 'opensource',
    categoryLabel: 'Open Source Software',
    role: 'Full Stack Developer / Creator',
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'JavaScript',
      'HTML/SCSS',
      'Reactive Forms'
    ],
    featured: true,
    description:
      'A full-stack GST management application designed for enterprise-level billing, automated tax breakdown calculation, and invoice bookkeeping.',
    responsibilities: [
      'Engineered automated CGST, SGST, and IGST tax bracket calculators with strict decimal validation.',
      'Built multi-item line invoice generation interfaces with client auto-complete and printable thermal receipt styling.',
      'Published open-source source repository on GitHub.'
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/AshutoshChoubey/AngularGST',
        type: 'github'
      }
    ]
  },
  {
    id: 'proj-django-react',
    title: 'Django REST & React CRUD Architecture',
    category: 'opensource',
    categoryLabel: 'Open Source & Video Series',
    organization: 'WorldGyan',
    role: 'Full Stack Developer & Instructor',
    technologies: [
      'Django REST Framework',
      'Python',
      'React.js',
      'JavaScript',
      'Fetch/Axios API'
    ],
    description:
      'A complete reference architecture and educational masterclass on integrating Django REST API with a React.js single-page application executing full CRUD operations.',
    responsibilities: [
      'Architected Django REST Framework serialization layers, model viewsets, and token-based authentication.',
      'Engineered clean React state management handling asynchronous API calls, error boundaries, and loading states.',
      'Created step-by-step video masterclass series and published complete project source code.'
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/AshutoshChoubey/djangorestframeworkandreact',
        type: 'github'
      },
      {
        label: 'Watch Video: Intro & Setup',
        url: 'https://www.youtube.com/watch?v=eTpXGyzok14',
        type: 'youtube'
      },
      {
        label: 'Watch Video: Full CRUD React.js',
        url: 'https://youtu.be/RLpp_2akDok',
        type: 'youtube'
      },
      {
        label: 'Watch Video: Full Django REST API',
        url: 'https://www.youtube.com/watch?v=prH9ysc8Dmg',
        type: 'youtube'
      }
    ]
  },

  // 🎥 Tutorial Series & Playlists (WorldGyan)
  {
    id: 'proj-react-mern-series',
    title: 'React & MERN Stack Development Series',
    category: 'tutorial',
    categoryLabel: 'WorldGyan Video Series',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Content Creator & Instructor',
    featured: true,
    technologies: [
      'React.js',
      'JavaScript (ES6+)',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs'
    ],
    description:
      'Comprehensive tutorial playlists covering React form handling, state patterns, MERN stack integration, and complete web development workflows.',
    responsibilities: [
      'Recorded multi-part structured video tutorials covering end-to-end full-stack architectures in both Hindi and English.',
      'Authored deep dives on complex React form validations, hook architectures, and MongoDB API connectivity.',
      'Mentored thousands of developers in the comments and technical community forum.'
    ],
    links: [
      {
        label: 'MERN Stack in Hindi Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSddUcSRVSf4IBWBPU3zo7Kv',
        type: 'youtube'
      },
      {
        label: 'MERN Stack in English Playlist',
        url: 'http://www.youtube.com/playlist?list=PLqQyE6QNucSdn3cejSHce-T9QMEP8JcQk',
        type: 'youtube'
      },
      {
        label: 'Complex React Form (Hindi)',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucScLssc2dlNS66BJm3m_bRu4',
        type: 'youtube'
      },
      {
        label: 'Complex React Form (English)',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSfrj9IjoeegyoVMsyX5Xd7B',
        type: 'youtube'
      }
    ]
  },
  {
    id: 'proj-angular-mastery-series',
    title: 'Angular Mastery & Advanced Architecture Series',
    category: 'tutorial',
    categoryLabel: 'WorldGyan Video Series',
    organization: 'WorldGyan (@worldgyan)',
    role: 'Content Creator & Instructor',
    featured: true,
    technologies: [
      'Angular (v10–19)',
      'TypeScript',
      'RxJS Operators',
      'NgRx State Management',
      'Angular Signals',
      'Unit Testing'
    ],
    description:
      'Extensive collection of tutorials ranging from basic authentication and unit testing to advanced RxJS operators (SwitchMap, MergeMap, ForkJoin), Change Detection, and NgRx state management across Angular versions 10 through 19.',
    responsibilities: [
      'Produced in-depth architectural guides on Angular Standalone Components, Signal primitives, and high-performance reactive UI patterns.',
      'Created specialized playlists for Angular 10, Angular 12, Angular 13, and Angular 19.',
      'Authored guides on authentication lifecycle, route guards, interceptors, and automated testing.'
    ],
    links: [
      {
        label: 'Complete Angular Mastery Playlist',
        url: 'https://www.youtube.com/playlist?list=PLqQyE6QNucSdbXFScSNlfqQ5ny0V3hNvf',
        type: 'youtube'
      },
      {
        label: 'Visit Official WorldGyan Channel',
        url: 'https://www.youtube.com/@worldgyan',
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
