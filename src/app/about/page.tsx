'use client';

import { motion } from 'framer-motion';
import { TechBadge } from '../../components/TechBadge';

const skills = [
  'AI Development',
  'Automation',
  'Web Design',
  'Mobile Apps',
  'Bot Development',
  'WordPress',
  'Zoho',
  'GoHighLevel',
  'Rork Lovable',
  'Cursor',
  'FlutterFlow',
  'V0',
  'TypeScript',
  'Next.js',
  'Python',
  'React Native',
  'Discord.js',
  'OpenAI',
];

const experience = [
  {
    role: 'AI Developer & Automation Specialist',
    period: '2023 - Present',
    description:
      'Building AI-powered applications and automation systems using cutting-edge tools like Rork Lovable, Cursor, and no-code platforms.',
  },
  {
    role: 'Web Developer & Designer',
    period: '2021 - Present',
    description:
      'Creating responsive websites and custom solutions using WordPress, Wix, and modern frameworks like Next.js.',
  },
];

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">About Voxxel</h1>
          <p className="text-xl text-muted-foreground">
            Building the future of digital solutions with AI and automation
          </p>
        </motion.div>

        {/* Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">My Story</h2>
          <div className="space-y-4 text-muted-foreground leading-7">
            <p>
              I&apos;m a digital creator passionate about leveraging AI and modern tools to build
              solutions that make a difference. My journey started with web development and has
              evolved into a comprehensive skill set spanning AI development, automation, web
              design, mobile apps, and bot development.
            </p>
            <p>
              I specialize in using cutting-edge tools like Rork Lovable, Cursor, Glide,
              FlutterFlow, and V0 to create AI-powered applications that solve real-world problems.
              My automation expertise includes integrating platforms like Zoho, GoHighLevel, and
              Brevo to streamline business processes.
            </p>
            <p>
              I build responsive websites with WordPress and modern frameworks, develop
              cross-platform mobile applications, create intelligent chatbots and automation bots,
              and design ComfyUI workflows for image generation. Every project is crafted with
              attention to detail and a focus on user experience.
            </p>
          </div>
        </motion.section>

        {/* What I Build */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">What I Build</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">AI Applications</h3>
              <p className="text-sm text-muted-foreground">
                Web and mobile apps powered by AI, built with modern tools and frameworks.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Automation Systems</h3>
              <p className="text-sm text-muted-foreground">
                Workflow automation connecting CRM, email, and business tools.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Web Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Responsive websites and e-commerce platforms with custom functionality.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Mobile Applications</h3>
              <p className="text-sm text-muted-foreground">
                Cross-platform mobile apps with native performance and modern UX.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Bots & Automation</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent chatbots and automation bots for various platforms.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <TechBadge key={skill} label={skill} />
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-primary pl-6">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center pt-8"
        >
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
              Let&apos;s Work Together
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
