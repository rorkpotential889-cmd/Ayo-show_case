'use client';

import { motion } from 'framer-motion';
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
          <h1 className="text-4xl md:text-5xl font-bold">Completed Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects delivered for clients across AI development, automation, web design,
            mobile apps, and bot development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                {/* Image Section */}
                {project.image ? (
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <MockupImage
                      src={project.image}
                      alt={project.title}
                      type={project.title.toLowerCase().includes('mobile') ? 'mobile' : 'desktop'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ) : (
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-muted-foreground">Project Image</p>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
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
