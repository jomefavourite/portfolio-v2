import { MetadataRoute } from 'next';

// Explicitly welcome major search engine and AI crawlers so that
// automated agents (and analytics like Sabilytics) can clearly see
// that indexing and AI access are permitted.
const allowedBots = [
  // Search engines
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  // AI crawlers
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow every crawler full access.
      {
        userAgent: '*',
        allow: '/',
      },
      // Named crawlers we explicitly welcome.
      {
        userAgent: allowedBots,
        allow: '/',
      },
    ],
    sitemap: 'https://favouritejome.com/sitemap.xml',
  };
}
