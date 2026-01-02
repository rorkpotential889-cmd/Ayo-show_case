import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Ayodev - Professional AI developer with 5+ years AI experience and 7+ years coding. Expert in AI development, automation, web design, mobile apps, and teaching.',
  openGraph: {
    title: 'About Ayodev - Professional AI Developer',
    description:
      'Professional AI developer with 5+ years AI experience and 7+ years coding. Offering development services and training.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
