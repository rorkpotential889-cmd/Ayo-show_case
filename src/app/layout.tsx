import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio',
  },
  description: 'My portfolio website',
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/30">
          <div className="container flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold">
              <span className="text-xl">PL</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/projects" className="hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main className="container py-10 min-h-[calc(100dvh-7rem)]">{children}</main>
        <footer className="border-t">
          <div className="container py-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prince Lallazy. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
