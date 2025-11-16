'use client';

import { motion } from 'framer-motion';
import { projects } from '../../content/projects';
import { Card, CardDescription, CardTitle } from '../../components/ui/Card';
import { TechBadge } from '../../components/TechBadge';
import { Button } from '../../components/ui/Button';
import { MockupImage } from '../../components/MockupImage';

export default function ProjectsPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
        <p className="text-xl text-muted-foreground">
          Showcasing my work across AI development, automation, web design, and more
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              {project.image && (
                <div className="relative h-48 bg-muted">
                  <MockupImage
                    src={project.image}
                    alt={project.title}
                    type={project.title.toLowerCase().includes('mobile') ? 'mobile' : 'desktop'}
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col space-y-4">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>

                <div className="flex gap-2 mt-auto pt-4">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
