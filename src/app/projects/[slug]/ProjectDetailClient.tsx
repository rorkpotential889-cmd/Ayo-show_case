'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../../../content/projects';
import { TechBadge } from '../../../components/TechBadge';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

export function ProjectDetailClient({ project }: { project: Project }) {
  const allImages = project.image
    ? [project.image, ...(project.images || [])]
    : project.images || [];

  return (
    <div className="container py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="outline" className="mb-8">
            ← Back to Projects
          </Button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
              {project.category.replace('-', ' ')}
            </span>
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Main Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-2xl bg-muted"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
        )}

        {/* Project Images Gallery */}
        {allImages.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  className="relative aspect-video rounded-lg overflow-hidden border shadow-lg hover:shadow-xl transition-shadow group bg-muted"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-12 border-t"
        >
          <Card className="p-8 text-center space-y-6 bg-gradient-to-br from-primary/5 to-primary/10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Want a Similar Project?</h2>
              <p className="text-muted-foreground">
                Let&apos;s discuss how I can help bring your vision to life
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View All Services
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
