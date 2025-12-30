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
    'Professional AI development, automation, web design, mobile apps, and bot development services. Building modern digital solutions with cutting-edge technology.',
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
  ],
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
