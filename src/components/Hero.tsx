'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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

          {/* Right Side - Professional Developer Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Card className="p-4 lg:p-6 overflow-hidden border-2 shadow-xl bg-card">
              <div className="relative aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                {/* Professional Developer Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/hero/developer.jpg"
                    alt="Professional developer working on modern solutions"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Hide image if not found, show fallback
                      e.currentTarget.style.display = 'none';
                    }}
                    unoptimized
                  />
                </div>
                {/* Fallback - shows if image not found */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-muted/30 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/mockups/ai-dashboard.svg"
                    alt="Professional Developer"
                    className="w-full h-full object-contain p-8 opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3 p-6 z-10 bg-background/50 backdrop-blur-sm rounded-lg">
                      <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-foreground/80 font-medium">
                        Professional Developer
                      </p>
                    </div>
                  </div>
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
