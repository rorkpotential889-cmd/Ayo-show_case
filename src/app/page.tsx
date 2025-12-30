'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/ui/Button';
import { Card, CardDescription, CardTitle } from '../components/ui/Card';
import { projects } from '../content/projects';
import { testimonials } from '../content/testimonials';

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

      {/* Testimonials Preview */}
      {testimonials.length > 0 && (
        <section className="container py-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    {testimonial.message}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                View All Testimonials
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
