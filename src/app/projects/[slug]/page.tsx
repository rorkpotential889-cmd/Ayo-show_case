import { notFound } from 'next/navigation';
import { getProjectBySlug } from '../../../content/projects';
import { ProjectDetailClient } from './ProjectDetailClient';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Handle both async (Next.js 15) and sync (Next.js 14) params
  const resolvedParams = typeof params === 'object' && 'then' in params ? await params : params;
  const slug = resolvedParams.slug;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
