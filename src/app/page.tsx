'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/ui/Button';
import { Card, CardDescription, CardTitle } from '../components/ui/Card';
import { projects } from '../content/projects';

const featuredServices = [
  {
    title: 'AI Development',
    description: 'Build AI-powered applications with modern tools',
    tools: ['Rork Lovable', 'Cursor', 'V0', 'FlutterFlow'],
    mockupType: 'dashboard' as const,
    mockupAlt: 'AI App Dashboard',
  },
  {
    title: 'Automation',
    description: 'Streamline workflows with powerful integrations',
    tools: ['Zoho', 'GoHighLevel', 'WordPress'],
    mockupType: 'workflow' as const,
    mockupAlt: 'Automation Flow',
  },
  {
    title: 'Web Design',
    description: 'Create beautiful, responsive websites',
    tools: ['WordPress', 'Wix', 'Next.js'],
    mockupType: 'desktop' as const,
    mockupAlt: 'Website Design',
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Services Overview */}
      <section className="container py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="container py-20 bg-muted/30">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing recent work and capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card>
                  <div className="p-6 space-y-4">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground">
            Let&apos;s discuss your project and create a solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
