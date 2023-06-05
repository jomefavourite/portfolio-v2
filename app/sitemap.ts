import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://favourite.site',
      lastModified: new Date(),
    },
    {
      url: 'https://www.favouritejome.site/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://www.favouritejome.site/favourite-jome_resume.pdf',
      lastModified: new Date(),
    },
    {
      url: 'https://www.favouritejome.site/articles',
      lastModified: new Date(),
    },
    {
      url: 'https://www.favouritejome.site/experiences',
      lastModified: new Date(),
    },
    {
      url: 'https://www.favouritejome.site/projects/all-project',
      lastModified: new Date(),
    },
  ];
}