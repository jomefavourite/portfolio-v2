import { NextResponse } from "next/server";

export interface Episode {
  videoId: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  season: string;
}

const PLAYLISTS = [
  { id: "PLJW0KoFTHN1BpVu0yucDvuUliaks2v8cP", season: "S2" },
  { id: "PLJW0KoFTHN1Ci_FBRp7n4uYpKp0AkQtge", season: "S1" },
];

function parseEntries(xml: string, season: string): Episode[] {
  const entries: Episode[] = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xml)) !== null) {
    const entry = match[1];

    const videoId = (entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/) ?? [])[1];
    const rawTitle = (entry.match(/<title>(.*?)<\/title>/) ?? [])[1];
    const link = (entry.match(/<link rel="alternate" href="(.*?)"/) ?? [])[1];
    const thumbnail = (entry.match(/<media:thumbnail url="(.*?)"/) ?? [])[1];
    const published = (entry.match(/<published>(.*?)<\/published>/) ?? [])[1];

    if (!videoId || !rawTitle) continue;

    const title = rawTitle
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"');

    entries.push({
      videoId,
      title,
      url: link ?? `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail: thumbnail ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      publishedAt: published ?? "",
      season,
    });
  }

  return entries;
}

export async function GET() {
  try {
    const results = await Promise.all(
      PLAYLISTS.map(async ({ id, season }) => {
        const res = await fetch(
          `https://www.youtube.com/feeds/videos.xml?playlist_id=${id}`,
          { next: { revalidate: 3600 } }
        );
        const xml = await res.text();
        return parseEntries(xml, season);
      })
    );

    return NextResponse.json(results.flat());
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch episodes" },
      { status: 500 }
    );
  }
}
