import Link from 'next/link';

type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Princelallazy',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourhandle',
    icon: 'twitter',
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: 'email',
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={link.name}
        >
          <span className="sr-only">{link.name}</span>
          <span className="text-xl">{getIcon(link.icon)}</span>
        </Link>
      ))}
    </div>
  );
}

function getIcon(icon: string): string {
  const icons: Record<string, string> = {
    github: '🐙',
    linkedin: '💼',
    twitter: '🐦',
    email: '✉️',
  };
  return icons[icon] || '🔗';
}
