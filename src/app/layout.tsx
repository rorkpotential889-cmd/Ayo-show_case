import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Logo } from '../components/Logo';
import { MobileNav } from '../components/MobileNav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Ayodev - AI Development & Digital Solutions',
    template: '%s | Ayodev',
  },
  description:
    'Professional AI developer with 5+ years AI experience and 7+ years coding. Offering AI development, automation, web design, mobile apps, bot development, and consulting services. Expert in Rork Lovable, Cursor, ComfyUI, and modern development tools.',
  metadataBase: new URL('https://ayodev.com'),
  keywords: [
    'AI development',
    'automation',
    'web design',
    'ComfyUI',
    'mobile apps',
    'WordPress',
    'Zoho',
    'GoHighLevel',
    'Rork Lovable',
    'Cursor',
    'bot development',
    'consulting',
    'coding training',
    'image editing',
  ],
  authors: [{ name: 'Ayodev' }],
  creator: 'Ayodev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayodev.com',
    siteName: 'Ayodev',
    title: 'Ayodev - AI Development & Digital Solutions',
    description:
      'Professional AI developer with 5+ years AI experience and 7+ years coding. Building modern digital solutions with cutting-edge technology.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayodev - AI Development & Digital Solutions',
    description:
      'Professional AI developer offering development, automation, and consulting services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="container flex h-16 items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link
                href="/"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/testimonials"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Contact
              </Link>
            </nav>
            <div className="relative">
              <MobileNav />
            </div>
          </div>
        </header>
        <main className="min-h-[calc(100dvh-8rem)]">{children}</main>
        <footer className="border-t mt-20">
          <div className="container py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ayodev. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
                <Link href="/testimonials" className="hover:text-foreground transition-colors">
                  Testimonials
                </Link>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
