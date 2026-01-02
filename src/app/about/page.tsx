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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            About Ayodev
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional AI Developer & Coding Consultant with 12+ Years of Experience
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">AI Development Experience</h3>
                <p className="text-3xl font-bold text-primary">5+ Years</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Specialized in AI-powered applications and automation
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Raw Coding Experience</h3>
                <p className="text-3xl font-bold text-primary">7+ Years</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Deep expertise in programming and software development
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">My Professional Journey</h2>
          <div className="space-y-4 text-muted-foreground leading-7">
            <p>
              With over 12 years of combined experience in AI development and raw coding, I&apos;ve
              built a comprehensive skill set that spans cutting-edge AI technologies, automation
              systems, web design, mobile app development, and bot creation. My journey has evolved
              from traditional programming to mastering modern AI tools and no-code platforms.
            </p>
            <p>
              I specialize in using cutting-edge tools like Rork Lovable, Cursor, ComfyUI, Glide,
              FlutterFlow, and V0 to create AI-powered applications that solve real-world problems.
              My automation expertise includes integrating platforms like Zoho, GoHighLevel, and
              Brevo to streamline business processes and increase efficiency.
            </p>
            <p>
              Beyond development, I&apos;m passionate about education and knowledge sharing. I teach
              people how to code, edit images, use ComfyUI workflows, and leverage modern
              development tools. My teaching approach focuses on practical, hands-on learning that
              empowers others to build their own solutions.
            </p>
            <p>
              Every project I deliver is crafted with attention to detail, professional standards,
              and a focus on delivering value. Whether it&apos;s a mobile app, website, automation
              system, or AI solution, I ensure the highest quality and user experience.
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

        {/* Education & Teaching */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">Education & Teaching</h2>
          <div className="space-y-4 text-muted-foreground leading-7">
            <p>
              I believe in sharing knowledge and empowering others. Through my teaching, I help
              people learn:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Coding & Development</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Programming fundamentals</li>
                  <li>Modern development tools</li>
                  <li>AI integration techniques</li>
                  <li>Best practices and workflows</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Image Editing & Design</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Image editing techniques</li>
                  <li>ComfyUI workflow creation</li>
                  <li>Rampart and other tools</li>
                  <li>Visual design principles</li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              <strong className="text-foreground">Note:</strong> Video tutorials and detailed guides
              will be added to showcase my teaching methods and help others learn these skills
              effectively.
            </p>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Professional Experience</h2>
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
