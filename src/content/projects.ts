export type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Urban Anomaly Reporting Mobile App',
    description:
      'Cross-platform mobile application for reporting urban anomalies. Features include real-time reporting, history tracking, status management, and multilingual support. Built with modern mobile frameworks.',
    tech: ['React Native', 'Expo', 'TypeScript', 'REST API', 'Backend Integration'],
    image: '/projects/urban-anomaly-app.jpg',
    featured: true,
  },
  {
    title: 'PodPro - Podcast Discovery Platform',
    description:
      'Modern podcast discovery and playback web application with trending podcasts, category filtering, personalized recommendations, and social features. Features include search, favorites, recently played, and now playing functionality.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    image: '/projects/podpro-podcast-app.jpg',
    featured: true,
  },
  {
    title: 'Skillset - Learning Management Dashboard',
    description:
      'Comprehensive learning management platform dashboard with analytics, revenue tracking, user management, course purchases, and calendar integration. Features mentor-student management and community growth tracking.',
    tech: ['React', 'Next.js', 'TypeScript', 'Chart.js', 'Dashboard UI'],
    image: '/projects/skillset-dashboard.jpg',
    featured: true,
  },
  {
    title: 'Social Media Content Platform',
    description:
      'Modern social media and content-sharing web application with activity feeds, profile management, alerts, and contact management. Features include post creation, likes, comments, and following system.',
    tech: ['React', 'Next.js', 'TypeScript', 'Social Media API', 'Real-time Updates'],
    image: '/projects/social-media-platform.jpg',
    featured: true,
  },
  {
    title: 'Navarin Arayes Fusion - Restaurant Website',
    description:
      'Beautiful restaurant website for Navarin Arayes Fusion featuring modern design, menu showcase, and contact integration. Clean layout with food photography and easy navigation.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design'],
    image: '/projects/navarin-restaurant.jpg',
    featured: false,
  },
  {
    title: 'NHBC Construction - Business Website',
    description:
      'Professional construction company website with services showcase, gallery, and contact forms. Features modern design with construction imagery and clear call-to-action sections.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Business Website'],
    image: '/projects/nhbc-construction.jpg',
    featured: false,
  },
  {
    title: 'Home Improvement & Artisanal Guide',
    description:
      'Elegant website for home improvement and artisanal services with modern interior design showcase. Features hero sections, service listings, and professional presentation.',
    tech: ['Next.js', 'React', 'Modern UI/UX', 'Responsive Design'],
    image: '/projects/home-improvement.jpg',
    featured: false,
  },
  {
    title: 'AI Chat Application',
    description:
      'Built with Rork Lovable and Cursor. A modern chat interface with AI integration for customer support automation.',
    tech: ['Rork Lovable', 'Cursor', 'OpenAI', 'Next.js', 'TypeScript'],
    featured: false,
  },
  {
    title: 'Zoho Automation System',
    description:
      'Custom automation workflow connecting Zoho CRM with GoHighLevel and WordPress. Automates lead management and follow-ups.',
    tech: ['Zoho', 'GoHighLevel', 'WordPress', 'Zapier'],
    featured: false,
  },
  {
    title: 'ComfyUI Workflow Generator',
    description:
      'Advanced ComfyUI workflow for batch image generation with custom nodes and optimized pod runs.',
    tech: ['ComfyUI', 'Python', 'Stable Diffusion', 'ControlNet'],
    featured: false,
  },
];
