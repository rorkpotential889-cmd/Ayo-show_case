import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'View completed projects: Mobile apps, web applications, websites, AI solutions, and automation systems. Real projects delivered for clients.',
  openGraph: {
    title: 'Projects - Completed Work Portfolio',
    description:
      'Browse completed projects including mobile apps, web apps, websites, and AI solutions.',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
