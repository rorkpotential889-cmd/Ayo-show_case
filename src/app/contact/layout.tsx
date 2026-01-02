import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Ayodev for AI development, automation, web design, mobile apps, bot development, or consulting services. Let's discuss your project.",
  openGraph: {
    title: "Contact Ayodev - Let's Work Together",
    description: 'Contact Ayodev to discuss your AI development, automation, or consulting needs.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
