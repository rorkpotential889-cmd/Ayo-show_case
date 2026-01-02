import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Professional services: AI Development, Automation, Web Design, Mobile Apps, Bot Development, ComfyUI Workflows, and Consulting & Training. Expert in Rork Lovable, Cursor, and modern tools.',
  openGraph: {
    title: 'Services - AI Development & Digital Solutions',
    description:
      'Professional AI development, automation, web design, mobile apps, bot development, and consulting services.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
