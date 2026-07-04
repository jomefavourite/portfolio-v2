import { NextResponse } from "next/server";

export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  coverImage: { url: string } | null;
}

const FEED_URL = "https://blog.favouritejome.dev/rss.xml";

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripCData(text: string): string {
  const match = text.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return decodeEntities(match ? match[1] : text);
}

function parseItems(xml: string): Post[] {
  const posts: Post[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const rawTitle = (item.match(/<title>([\s\S]*?)<\/title>/) ?? [])[1];
    const link = (item.match(/<link>([\s\S]*?)<\/link>/) ?? [])[1];
    const pubDate = (item.match(/<pubDate>([\s\S]*?)<\/pubDate>/) ?? [])[1];
    const coverUrl = (item.match(/<enclosure url="(.*?)"/) ?? [])[1];

    if (!rawTitle || !link) continue;

    const slug = new URL(link).pathname.replace(/^\//, "");

    posts.push({
      title: stripCData(rawTitle),
      slug,
      publishedAt: pubDate ?? "",
      coverImage: coverUrl ? { url: coverUrl } : null,
    });
  }

  return posts;
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    const xml = await res.text();
    const posts = parseItems(xml).slice(0, 6);

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
