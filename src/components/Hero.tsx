'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/Button';
import { SocialLinks } from './SocialLinks';
import { Card } from './ui/Card';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Ayodev
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                AI Development • Automation • Web Design • Mobile Apps • Bot Development
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building modern digital solutions with cutting-edge AI tools and no-code platforms.
                From mobile apps to automation systems, I create solutions that scale.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  Hire Me
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  View Projects
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Side - Image/Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-muted/50 to-muted/30 border-2">
              <div className="aspect-square lg:aspect-[4/3] flex items-center justify-center bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/30">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-muted-foreground/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Image Placeholder</p>
                  <p className="text-xs text-muted-foreground/70">Your image will appear here</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10" />
    </section>
  );
}
