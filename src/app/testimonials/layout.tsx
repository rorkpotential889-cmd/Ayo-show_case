import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read client testimonials and reviews for Ayodev. See what clients say about AI development, automation, web design, and consulting services.',
  openGraph: {
    title: 'Testimonials - Client Reviews',
    description: "Read testimonials from satisfied clients about Ayodev's professional services.",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
