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
    title: 'Spotify Playlist Curation Tool',
    description:
      'Automated playlist curation system for heavy rock and metal genres with analytics and growth tracking.',
    tech: ['Spotify API', 'Node.js', 'MongoDB'],
    url: '#',
  },
];
