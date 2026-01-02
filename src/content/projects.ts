export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
  image?: string;
  images?: string[]; // Multiple images for detail page
  featured?: boolean;
  category: 'mobile-app' | 'website' | 'web-app' | 'automation' | 'ai' | 'bot';
  slug: string;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Urban Anomaly Reporting Mobile App',
    description:
      'Cross-platform mobile application for reporting urban anomalies. Features include real-time reporting, history tracking, status management, and multilingual support. Built with modern mobile frameworks.',
    tech: ['React Native', 'Expo', 'TypeScript', 'REST API', 'Backend Integration'],
    image: '/projects/mobile-app/urban-anomaly-app.jpg',
    images: [
      '/projects/mobile-app/urban-anomaly-1.jpg',
      '/projects/mobile-app/urban-anomaly-2.jpg',
      '/projects/mobile-app/urban-anomaly-3.jpg',
    ],
    featured: true,
    category: 'mobile-app',
    slug: 'urban-anomaly-reporting-mobile-app',
  },
  {
    id: '2',
    title: 'PodPro - Podcast Discovery Platform',
    description:
      'Modern podcast discovery and playback web application with trending podcasts, category filtering, personalized recommendations, and social features. Features include search, favorites, recently played, and now playing functionality.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    image: '/projects/web-app/podpro-podcast-app.jpg',
    images: [
      '/projects/web-app/podpro-1.jpg',
      '/projects/web-app/podpro-2.jpg',
      '/projects/web-app/podpro-3.jpg',
    ],
    featured: true,
    category: 'web-app',
    slug: 'podpro-podcast-discovery-platform',
  },
  {
    id: '3',
    title: 'Skillset - Learning Management Dashboard',
    description:
      'Comprehensive learning management platform dashboard with analytics, revenue tracking, user management, course purchases, and calendar integration. Features mentor-student management and community growth tracking.',
    tech: ['React', 'Next.js', 'TypeScript', 'Chart.js', 'Dashboard UI'],
    image: '/projects/web-app/skillset-dashboard.jpg',
    images: [
      '/projects/web-app/skillset-1.jpg',
      '/projects/web-app/skillset-2.jpg',
      '/projects/web-app/skillset-3.jpg',
    ],
    featured: true,
    category: 'web-app',
    slug: 'skillset-learning-management-dashboard',
  },
  {
    id: '4',
    title: 'Social Media Content Platform',
    description:
      'Modern social media and content-sharing web application with activity feeds, profile management, alerts, and contact management. Features include post creation, likes, comments, and following system.',
    tech: ['React', 'Next.js', 'TypeScript', 'Social Media API', 'Real-time Updates'],
    image: '/projects/web-app/social-media-platform.jpg',
    images: [
      '/projects/web-app/social-media-1.jpg',
      '/projects/web-app/social-media-2.jpg',
      '/projects/web-app/social-media-3.jpg',
    ],
    featured: true,
    category: 'web-app',
    slug: 'social-media-content-platform',
  },
  {
    id: '5',
    title: 'Navarin Arayes Fusion - Restaurant Website',
    description:
      'Beautiful restaurant website for Navarin Arayes Fusion featuring modern design, menu showcase, and contact integration. Clean layout with food photography and easy navigation.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design'],
    image: '/projects/website/navarin-restaurant.jpg',
    images: [
      '/projects/website/navarin-1.jpg',
      '/projects/website/navarin-2.jpg',
      '/projects/website/navarin-3.jpg',
    ],
    featured: false,
    category: 'website',
    slug: 'navarin-arayes-fusion-restaurant',
  },
  {
    id: '6',
    title: 'NHBC Construction - Business Website',
    description:
      'Professional construction company website with services showcase, gallery, and contact forms. Features modern design with construction imagery and clear call-to-action sections.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Business Website'],
    image: '/projects/website/nhbc-construction.jpg',
    images: [
      '/projects/website/nhbc-1.jpg',
      '/projects/website/nhbc-2.jpg',
      '/projects/website/nhbc-3.jpg',
    ],
    featured: false,
    category: 'website',
    slug: 'nhbc-construction-business-website',
  },
  {
    id: '7',
    title: 'Home Improvement & Artisanal Guide',
    description:
      'Elegant website for home improvement and artisanal services with modern interior design showcase. Features hero sections, service listings, and professional presentation.',
    tech: ['Next.js', 'React', 'Modern UI/UX', 'Responsive Design'],
    image: '/projects/website/home-improvement.jpg',
    images: [
      '/projects/website/home-improvement-1.jpg',
      '/projects/website/home-improvement-2.jpg',
      '/projects/website/home-improvement-3.jpg',
    ],
    featured: false,
    category: 'website',
    slug: 'home-improvement-artisanal-guide',
  },
  {
    id: '8',
    title: 'AI Chat Application',
    description:
      'Built with Rork Lovable and Cursor. A modern chat interface with AI integration for customer support automation.',
    tech: ['Rork Lovable', 'Cursor', 'OpenAI', 'Next.js', 'TypeScript'],
    featured: false,
    category: 'ai',
    slug: 'ai-chat-application',
    image: '/projects/ai/ai-chat-main.jpg',
    images: ['/projects/ai/ai-chat-1.jpg', '/projects/ai/ai-chat-2.jpg'],
  },
  {
    id: '9',
    title: 'Zoho Automation System',
    description:
      'Custom automation workflow connecting Zoho CRM with GoHighLevel and WordPress. Automates lead management and follow-ups.',
    tech: ['Zoho', 'GoHighLevel', 'WordPress', 'Zapier'],
    featured: false,
    category: 'automation',
    slug: 'zoho-automation-system',
    image: '/projects/automation/zoho-main.jpg',
    images: ['/projects/automation/zoho-1.jpg', '/projects/automation/zoho-2.jpg'],
  },
  {
    id: '10',
    title: 'ComfyUI Workflow Generator',
    description:
      'Advanced ComfyUI workflow for batch image generation with custom nodes and optimized pod runs.',
    tech: ['ComfyUI', 'Python', 'Stable Diffusion', 'ControlNet'],
    featured: false,
    category: 'ai',
    slug: 'comfyui-workflow-generator',
    image: '/projects/ai/comfyui-main.jpg',
    images: ['/projects/ai/comfyui-1.jpg', '/projects/ai/comfyui-2.jpg'],
  },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Helper function to get projects by category
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category);
}
