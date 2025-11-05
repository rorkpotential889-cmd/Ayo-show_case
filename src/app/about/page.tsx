export const metadata = {
  title: 'About',
};

import { TechBadge } from '../../components/TechBadge';

export default function AboutPage() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Git',
    'REST APIs',
  ];

  const experience = [
    {
      role: 'Software Developer',
      company: 'Your Company',
      period: '2023 - Present',
      description: 'Building web applications and working with modern technologies.',
    },
    {
      role: 'Frontend Developer',
      company: 'Previous Company',
      period: '2021 - 2023',
      description: 'Developed user interfaces and improved user experience.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Bio Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="space-y-4 text-muted-foreground max-w-prose leading-7">
          <p>
            I'm a passionate developer with a focus on creating elegant, efficient, and user-friendly
            applications. I love turning complex problems into simple, beautiful solutions.
          </p>
          <p>
            My journey in web development started with a curiosity about how websites work, and it
            has evolved into a career where I get to build products that make a difference.
          </p>
          <p>
            When I'm not coding, I enjoy staying updated with the latest technologies, contributing
            to open-source projects, and sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <TechBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

