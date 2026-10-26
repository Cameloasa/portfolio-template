export interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  repoUrl: string;
  actionText: string;
  actionType: 'case-study' | 'demo' | 'audit';
  metrics?: { label: string; value: string }[];
  details: {
    overview: string;
    highlights: string[];
    techStack: string[];
    problemSolved: string;
    architectureNotes: string;
  };
}

export interface SkillCategory {
  title: string;
  iconType: 'code' | 'settings' | 'cloud';
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web & Frontend Development',
    iconType: 'code',
    description: 'Writing semantic, responsive, and standards-compliant client code with strict focus on WCAG AA accessibility standards.',
    skills: ['Semantic HTML5', 'CSS3 (Grid & Flexbox)', 'Vanilla JavaScript (ES6+)', 'Responsive Design', 'WCAG 2.2 AA', 'DOM APIs']
  },
  {
    title: 'Testing & Quality Assurance',
    iconType: 'settings',
    description: 'Automating integration, unit, and end-to-end regression suites to verify code contracts and endpoint latency thresholds.',
    skills: ['Automated API Testing', 'Playwright', 'Jest / PyTest', 'Regression Suites', 'Postman / Newman', 'CI Test Pipelines']
  },
  {
    title: 'Cloud, DevOps & Tools',
    iconType: 'cloud',
    description: 'Managing containerized microservices, container health monitoring, and version-controlled deployment pipelines.',
    skills: ['Docker Containers', 'Kubernetes Basics', 'Git & GitHub Actions', 'Linux / Bash Scripting', 'AWS (S3, EC2, CloudFront)', 'RESTful API Design']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'cloud-monitor',
    title: 'Cloud Infrastructure & Container Monitor',
    tags: ['Docker', 'Node.js', 'CSS Grid', 'Prometheus API'],
    description: 'A lightweight telemetry dashboard visualizing node cluster availability, active Docker containers, and memory utilization thresholds across multi-cloud environments with automated alert triggers.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WzSIwIsBWSJa3ZQa7XQW4T5EW0sKHZNqQ8RDx8Kbc_n4YZO0Rlms2T15pw5nGCYSePCa7tt0MXw9hEV7SRAlEfQ6z1WMvEht-j3jKhzsIqaj1KAP97fB3QPLfpHYVtPjI0czVFdjh4r9x9dJw11vpXm_vLojk4Qkpn-tsPtNAx03xFW5QcwGv6rsU-C1kpZ9Gnt9dbCZ7ct_w3pzVX32s37wbJr-WyUIP-JvqNdEw1T7am5Ot5n0QcFgg',
    repoUrl: 'https://github.com',
    actionText: 'Case Study Details →',
    actionType: 'case-study',
    metrics: [
      { label: 'Uptime', value: '99.98%' },
      { label: 'Monitored Containers', value: '48 Pods' },
      { label: 'Avg Latency', value: '18ms' }
    ],
    details: {
      overview: 'Engineered as a capstone systems project, this lightweight telemetry dashboard interfaces with Docker daemon sockets and Prometheus endpoints to surface real-time cluster metrics without resource-heavy agents.',
      highlights: [
        'Real-time WebSocket streaming of container CPU and RAM usage',
        'Custom alert pipeline firing webhooks at 85% memory consumption',
        'High-density CSS Grid dashboard with responsive column stacking',
        'Minimal footprint: < 45MB RAM overhead for monitoring daemon'
      ],
      techStack: ['Docker Engine API', 'Prometheus', 'Node.js / Express', 'WebSockets', 'CSS Grid', 'Chart.js'],
      problemSolved: 'Existing enterprise monitoring solutions imposed excessive system overhead on small laboratory cluster nodes. This tool reduced monitoring footprint by 62% while retaining millisecond-level threshold alerting.',
      architectureNotes: 'Built with microservices separation: metric exporter agent polling cgroups every 2s, broadcast over event socket to decoupled client.'
    }
  },
  {
    id: 'nexus-harness',
    title: 'Nexus Automated API & Web Test Harness',
    tags: ['Python', 'REST APIs', 'Playwright', 'Semantic HTML5'],
    description: 'An automated quality assurance dashboard monitoring endpoint regression suites, tracking pass-fail distributions, and logging live HTTP latency anomalies for continuous integration builds.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UiVULIIvD7f6Z_ojg33dqk0pHKvycHsSn-l8H6qD6zxHXNgBabT1vimzXhnKuZPpefWGRmyBnr0dz_olu7R5HEWoH8OITUJ86-57xaceo391B1mI00TLHlpOmoyp5T31TJUbYuT-aUeoNmW5mVZikLMSetiYVl8BNa0kn6_NcD-CE5J4SAemhVbcRCuV77maaDOPIG0L_ymEWAD541wDp3WsVtjzOv5C6Rbx99eKYTAuj1ad6xbWLu10Q',
    repoUrl: 'https://github.com',
    actionText: 'Schedule Demo →',
    actionType: 'demo',
    metrics: [
      { label: 'Regression Pass Rate', value: '94.8%' },
      { label: 'Daily Executions', value: '8,453' },
      { label: 'P99 Response', value: '142ms' }
    ],
    details: {
      overview: 'A full-stack automated QA test harness built for student development teams to orchestrate parallel Playwright browser checks and RESTful contract tests.',
      highlights: [
        'Automated Playwright end-to-end tests across Chromium, WebKit, and Firefox',
        'Schema contract verification using JSON Schema validator',
        'Visual regression diffing catching UI shift discrepancies down to 0.1%',
        'Automated JUnit test report export with interactive failure drilldown'
      ],
      techStack: ['Playwright', 'Python 3.11', 'FastAPI', 'PyTest', 'GitHub Actions CI', 'HTML5 Web Components'],
      problemSolved: 'Replaced manual smoke tests that took over 45 minutes per PR with a 90-second parallel headless runner that gates GitHub pull requests.',
      architectureNotes: 'Distributed test runner distributing test jobs into parallel worker processes, collecting timing telemetry into SQLite and presenting through lightweight web view.'
    }
  },
  {
    id: 'lumora-storefront',
    title: 'Lumora Responsive Web Storefront',
    tags: ['CSS Flexbox', 'Accessible Forms', 'Vanilla JS', 'WCAG 2.2 AA'],
    description: 'A fully responsive e-commerce catalog featuring real-time client-side price filtering, keyboard-accessible modal cart drawer, and high-contrast typography optimized for multi-device touch viewports.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1W2CcV1aQ1s6Q_WtG7aIXxZNAVvW8f2QTuhdSftmyOdQtwmgZLrj1AhAmhc4S2ovmcxXHoTUxLMNdjXRnv1WEI5GFDjeuelUiDUcNAqomq9H8OpQSHjN8eaS8NzLNVDndkrdJneLmMKrMo9e3gzltOXXShgGYbZHr4Pw0sbK6YDFcZUAUooAeXB5TAKzvl2cy9pabbVxOvKAupbvaIhQKmPnR3WSUep-V2BjZHji-J2iPly4wyB8OEJsCU',
    repoUrl: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
    actionText: 'Architecture Notes →',
    actionType: 'audit',
    metrics: [
      { label: 'Lighthouse Score', value: '100 Accessibility' },
      { label: 'Contrast Ratio', value: '14.2:1' },
      { label: 'Zero Frameworks', value: 'Pure JS & CSS' }
    ],
    details: {
      overview: 'Created as a masterclass assignment in pure semantic web standards, proving that modern reactive e-commerce experiences can be achieved with zero bloated runtime frameworks.',
      highlights: [
        '100% WCAG 2.2 Level AA accessibility compliance with axe-core audit',
        'Keyboard trap prevention in slide-out cart and modal dialogs',
        'Zero bundle size dependencies: pure semantic HTML5 and vanilla CSS3',
        'Fluid clamp() typography scaling seamlessly from 320px mobile to 4K displays'
      ],
      techStack: ['Semantic HTML5', 'CSS3 Custom Properties', 'Vanilla ES6+ JavaScript', 'ARIA 1.2 Specs', 'LocalStorage Cart API'],
      problemSolved: 'Eliminated typical e-commerce accessibility barriers (missing aria-labels, inaccessible filters, poor color contrast) while maintaining an ultra-sleek editorial aesthetic.',
      architectureNotes: 'State management powered by native CustomEvent emitter bus and reactive Proxy state for zero external framework overhead.'
    }
  }
];

export const HERO_AVATAR = 'https://lh3.googleusercontent.com/aida/AEtjO1Wr9Pfp_WyCq_XGb4KfDimQrLJhBRTbSP-91kKleY31akTVEZixraR3o2hQLf4BqjQSrpo9eEyxYplINWxADWrHqnAx59w-He81fEKDMszjGJMPWR_FsfYh8srnZ1bUy3DY_tYncqL5bnC5cXcRApobovTeUEfThTMnanKB5OMMFHbVR0BVKRCsnHFpG9zGexd8JPXb-WwtkvhFIqx_jbEw1wphYi7Y27Y4h8CrK3tBSjGmG95HshIqiGs';
