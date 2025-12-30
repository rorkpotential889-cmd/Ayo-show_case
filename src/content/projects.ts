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
    title: 'AI Chat Application',
    description:
      'Built with Rork Lovable and Cursor. A modern chat interface with AI integration for customer support automation.',
    tech: ['Rork Lovable', 'Cursor', 'OpenAI', 'Next.js', 'TypeScript'],
    url: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'Mobile App - FlutterFlow',
    description:
      'Cross-platform mobile application built with FlutterFlow. Features include user authentication, real-time data, and push notifications.',
    tech: ['FlutterFlow', 'Firebase', 'REST API'],
    url: '#',
    featured: true,
  },
  {
    title: 'Zoho Automation System',
    description:
      'Custom automation workflow connecting Zoho CRM with GoHighLevel and WordPress. Automates lead management and follow-ups.',
    tech: ['Zoho', 'GoHighLevel', 'WordPress', 'Zapier'],
    url: '#',
    featured: true,
  },
  {
    title: 'ComfyUI Workflow Generator',
    description:
      'Advanced ComfyUI workflow for batch image generation with custom nodes and optimized pod runs.',
    tech: ['ComfyUI', 'Python', 'Stable Diffusion', 'ControlNet'],
    url: '#',
  },
  {
    title: 'WordPress E-commerce Site',
    description:
      'Fully responsive e-commerce website with WooCommerce integration, custom theme, and payment gateway setup.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'CSS'],
    url: '#',
  },
  {
    title: 'Discord Bot - AI Assistant',
    description:
      'Intelligent Discord bot with AI-powered responses, moderation tools, and custom commands for community management.',
    tech: ['Discord.js', 'OpenAI', 'Node.js', 'TypeScript'],
    url: '#',
  },
  {
    title: 'Mobile App - Task Manager',
    description:
      'Cross-platform task management mobile app with real-time sync, notifications, and offline support built with FlutterFlow.',
    tech: ['FlutterFlow', 'Firebase', 'React Native'],
    url: '#',
  },
];
