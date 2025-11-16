'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '../lib/cn';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md hover:bg-accent"
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5 w-6">
          <span
            className={cn(
              'block h-0.5 w-full bg-foreground transition-all',
              isOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn('block h-0.5 w-full bg-foreground transition-all', isOpen && 'opacity-0')}
          />
          <span
            className={cn(
              'block h-0.5 w-full bg-foreground transition-all',
              isOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
