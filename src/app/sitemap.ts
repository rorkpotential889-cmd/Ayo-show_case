import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-website.vercel.app';
  return [
    '',
    '/about',
    '/projects',
    '/contact',
  ].map((path) => ({ url: `${baseUrl}${path}`, changefreq: 'weekly', priority: 0.7 }));
}

