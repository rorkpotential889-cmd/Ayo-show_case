export type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'Sample Project One',
    description: 'A placeholder project. Replace with your real work.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Sample Project Two',
    description: 'Another placeholder to be replaced soon.',
    tech: ['React', 'Node.js'],
  },
];
