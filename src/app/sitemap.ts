import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayodev.com';
  const routes = [
    { path: '', priority: 1.0, changefreq: 'weekly' },
    { path: '/about', priority: 0.9, changefreq: 'monthly' },
    { path: '/services', priority: 0.9, changefreq: 'weekly' },
    { path: '/projects', priority: 0.9, changefreq: 'weekly' },
    { path: '/testimonials', priority: 0.8, changefreq: 'monthly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/services/comfyui', priority: 0.7, changefreq: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changefreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route.priority,
  }));
}
