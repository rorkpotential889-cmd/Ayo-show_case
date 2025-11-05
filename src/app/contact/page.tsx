export const metadata = {
  title: 'Contact',
};

import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function ContactPage() {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:your.email@example.com',
      label: 'your.email@example.com',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Princelallazy',
      label: 'github.com/Princelallazy',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      label: 'linkedin.com/in/yourprofile',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourhandle',
      label: '@yourhandle',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-prose">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your visions.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Contact Methods</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {socialLinks.map((link) => (
            <Card key={link.name}>
              <h3 className="font-semibold mb-2">{link.name}</h3>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">{link.label}</Button>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Send a Message</h2>
        <Card>
          <p className="text-muted-foreground mb-4">
            You can add a contact form here using a service like Formspree, or integrate with your
            backend API.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md bg-background"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md bg-background"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-md bg-background"
                placeholder="Your message..."
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </Card>
      </section>
    </div>
  );
}

