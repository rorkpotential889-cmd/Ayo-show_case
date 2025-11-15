import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card, CardDescription, CardTitle } from '../components/ui/Card';
import { projects } from '../content/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="text-primary">Prince Lallazy</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A developer passionate about building modern web applications with clean code and great
          user experiences.
        </p>
        <div className="flex gap-4 pt-4">
          <Link href="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Get in Touch</Button>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground max-w-prose leading-7">
          I&apos;m a developer who loves creating digital experiences. I focus on building scalable,
          performant applications using modern technologies. When I&apos;m not coding, you can find
          me exploring new technologies and contributing to open-source projects.
        </p>
        <Link href="/about">
          <Button variant="ghost">Learn More →</Button>
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects">
            <Button variant="ghost">View All →</Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.title}>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
