export const metadata = {
  title: 'Projects',
};

import { projects } from '../../content/projects';
import { Card, CardDescription, CardTitle } from '../../components/ui/Card';
import { TechBadge } from '../../components/TechBadge';

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardTitle>{p.title}</CardTitle>
            <CardDescription>{p.description}</CardDescription>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
