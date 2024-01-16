import {
  Github as GitHubIcon,
  Linkedin as LinkedInIcon,
  Twitter as XIcon,
} from '../components/social-icons/icons'

export const RESUME_DATA = {
  name: 'Matthew Krick',
  initials: 'MK',
  location: 'San Diego, CA',
  locationLink: 'https://www.google.com/maps/place/sandiego',
  about: 'Technical Co-Founder, Principal Engineer',
  summary:
    'Matthew Krick is a freelance architect, mentor, and the technical co-founder of Parabol. ' +
    'He grew Parabol from an idea to a thriving SaaS serving over 500,000 users. ' +
    'Most recently, the company raised their Series A, backed by investors such as Microsoft M12, Charles River Ventures, and Slack Fund.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/5514175?v=4',
  personalWebsiteUrl: 'https://mattkrick.dev',
  contact: {
    email: 'matt.krick@gmail.com',
    tel: '',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/mattkrick',
        icon: 'github',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mattkrick',
        icon: 'linkedin',
      },
      {
        name: 'X',
        url: 'https://x.com/mattkrick',
        icon: 'twitter',
      },
    ],
  },
  education: [
    {
      school: 'University of Portland',
      degree: "Bachelor's in Technology Management",
      start: '2006',
      end: '2010',
    },
  ],
  work: [
    {
      company: 'Parabol',
      link: 'https://parabol.co',
      badges: [''],
      title: '',
      logo: '',
      start: '2016',
      end: 'Present',
      areas: [
        {
          title: 'Leadership',
          ethos: 'Work transparently. Hire curious people. Take big swings.',
          bullets: [
            'Achieved product/market fit through user interviews, testing countless hypotheses, and rapidly iterating',
            'Grew the team from 3 to 30 employees while maintaining a strong engineering culture',
            'Led by example by continuing to write code, perform code reviews, and mentor engineers',
            'Prioritized early-stage growth over monetizing a niche market, ultimately resulting in raising our seed round',
          ],
        },
        {
          title: 'Product',
          ethos:
            'Build a delightful product. Simple for casual users, optional flexibility for power users.',
          bullets: [
            'Created an open-source, seamless, real-time collaboration platform including deep integrations with GitHub, GitLab, Jira, Google, Microsoft, Slack, and more',
            'Introduced AI-powered search using the latest large language models (LLMs) to improve user experience',
            'Authored multiple top-ranked guides on Redis and GraphQL best practices, including dataloaders, integrations, and performance',
          ],
        },
        {
          title: 'DevOps',
          ethos:
            'Infrastructure should be boring and dependable. Abstract the complexities away from product developers.',
          bullets: [
            'Orchestrated a migration to Kubernetes resulting in improved scalability and faster deploys',
            'Automated the CI/CD release pipeline with GitHub Actions reducing deploy time to under 5 minutes',
            'Developed a build architecture to seamlessly deploy to airgapped, private, and public clouds',
            'Promoted the trend of a two-service backend (stateless GraphQL Executor, stateful WebSocket server), avoiding the pitfalls of microservices and monoliths',
          ],
        },
      ],
      description: '',
    },
    {
      company: 'Peace Corps',
      link: '',
      badges: [''],
      title: 'Volunteer, Programming and Business Strategy',
      logo: '',
      start: '2014',
      end: '2016',
      areas: [],
    },
    {
      company: 'Ecos Consulting (now ENGIE)',
      link: '',
      badges: [''],
      title: 'Researcher, Analyst',
      logo: '',
      start: '2010',
      end: '2014',
      areas: [],
    },
    {
      company: 'Boeing',
      link: '',
      badges: [''],
      title: 'Project Manager',
      logo: '',
      start: '2009',
      end: '2010',
      areas: [],
    },
  ],
  skills: [
    'AI/ML',
    'AWS',
    'CI/CD',
    'GCS',
    'GraphQL',
    'Kubernetes',
    'LLMs',
    'Next.js',
    'Node.js',
    'OpenAI',
    'PostgreSQL',
    'PWAs',
    'Pytorch',
    'React',
    'Redis',
    'TypeScript',
    'Stripe',
    'WebRTC',
    'WebSockets',
  ],
  projects: [],
} as const
