import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://favouritejome.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://favouritejome.com/linktree',
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
