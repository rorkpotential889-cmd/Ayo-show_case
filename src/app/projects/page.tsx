'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../../content/projects';
import { Card, CardDescription, CardTitle } from '../../components/ui/Card';
import { TechBadge } from '../../components/TechBadge';
import { MockupImage } from '../../components/MockupImage';

export default function ProjectsPage() {
  return (
    <div className="container py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Completed Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects I&apos;ve delivered for clients - Click on any project to see detailed
            images and information
          </p>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto">
            These are actual projects I&apos;ve completed, currently working on, and ready to
            deliver for you
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-80 bg-muted overflow-hidden rounded-t-lg">
                    <MockupImage
                      src={project.image}
                      alt={project.title}
                      type={project.category === 'mobile-app' ? 'mobile' : 'desktop'}
                      className="!h-full !w-full !min-h-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    {/* View Details Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        View Details →
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs text-muted-foreground">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="mt-auto pt-4 border-t">
                      <span className="inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Completed
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8"
        >
          <p className="text-muted-foreground mb-6">
            Want to see your project featured here? Let&apos;s work together!
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium">
              Start Your Project
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
