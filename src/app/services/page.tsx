export const metadata = {
  title: 'Services',
};

import { ServiceCard } from '../../components/ServiceCard';

const services = [
  {
    title: 'AI Development',
    description:
      'Build AI-powered web and mobile applications using cutting-edge tools like Rork Lovable, Cursor, Glide, Apsy, FlutterFlow, and V0. Create intelligent solutions that automate workflows and enhance user experiences.',
    tools: ['Rork Lovable', 'Cursor', 'Glide', 'Apsy', 'FlutterFlow', 'V0', 'OpenAI', 'Anthropic'],
    mockupType: 'dashboard' as const,
    mockupAlt: 'AI Dashboard Interface',
    mockupSrc: '/mockups/ai-dashboard.svg',
    features: [
      'AI web applications',
      'AI mobile apps',
      'Chat interfaces',
      'Automated workflows',
      'Custom AI integrations',
    ],
  },
  {
    title: 'Automation',
    description:
      'Streamline your business processes with powerful automation solutions. Integrate Zoho, GoHighLevel, Brevo, WordPress, and build custom deployment pipelines that save time and reduce errors.',
    tools: ['Zoho', 'GoHighLevel', 'Brevo', 'WordPress', 'Zapier', 'Make.com', 'n8n'],
    mockupType: 'workflow' as const,
    mockupAlt: 'Automation Workflow Diagram',
    mockupSrc: '/mockups/workflow-diagram.svg',
    features: [
      'CRM integrations',
      'Email automation',
      'Workflow automation',
      'Data synchronization',
      'Deployment pipelines',
      'API integrations',
    ],
  },
  {
    title: 'ComfyUI Workflows',
    description:
      'Create advanced ComfyUI workflows for image generation, processing, and automation. Build custom nodes, optimize pod runs, and develop production-ready image generation pipelines.',
    tools: ['ComfyUI', 'Stable Diffusion', 'ControlNet', 'Custom Nodes', 'Python'],
    mockupType: 'workflow' as const,
    mockupAlt: 'ComfyUI Workflow Interface',
    mockupSrc: '/mockups/comfyui-workflow.svg',
    features: [
      'Custom workflow design',
      'Pod run optimization',
      'Image generation pipelines',
      'Batch processing',
      'Model integration',
    ],
  },
  {
    title: 'Web Design',
    description:
      'Design and develop responsive, modern websites using WordPress, Wix, and no-code platforms. Create beautiful, user-friendly interfaces that convert visitors into customers.',
    tools: ['WordPress', 'Wix', 'Webflow', 'Figma', 'Tailwind CSS', 'Next.js'],
    mockupType: 'desktop' as const,
    mockupAlt: 'Website Design Mockup',
    mockupSrc: '/mockups/website-design.svg',
    features: [
      'Responsive design',
      'WordPress development',
      'Wix customization',
      'No-code solutions',
      'UI/UX design',
      'Performance optimization',
    ],
  },
  {
    title: 'Music & Promotion',
    description:
      'Curate Spotify playlists and promote heavy rock, metal, and hip-hop artists. Build engaging playlists that grow your audience and boost artist visibility.',
    tools: ['Spotify', 'Playlist Curation', 'Music Marketing', 'Social Media'],
    mockupType: 'playlist' as const,
    mockupAlt: 'Spotify Playlist Cover',
    mockupSrc: '/mockups/playlist-cover.svg',
    features: [
      'Playlist curation',
      'Heavy rock promotion',
      'Metal promotion',
      'Hip-hop promotion',
      'Artist discovery',
      'Playlist growth strategies',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive digital solutions for your business needs
        </p>
      </div>

      <div className="space-y-12">
        {services.map((service, idx) => (
          <div key={service.title}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Let&apos;s discuss how I can help bring your vision to life.
        </p>
        <a href="/contact">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}
