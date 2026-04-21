import React from "react";
import Image from "next/image";
import { PostResponse } from "../hooks/useBlogPost";
import { AiOutlineRead } from "react-icons/ai";

type ArticleCardProps = { post: PostResponse };

function ArticleCard({ post }: ArticleCardProps) {
  return (
    <a
      href={`https://favouritejome.hashnode.dev/${post.slug}`}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-darkCard transition hover:border-white/25"
    >
      {post.coverImage?.url ? (
        <div className="relative h-44 w-full overflow-hidden bg-black">
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            unoptimized={post.coverImage.url.endsWith(".gif")}
            className="object-cover object-top transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-44 w-full bg-white/5" />
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs text-lightGrey">
          {new Date(post.publishedAt).toDateString()}
        </p>
        <h3 className="flex-1 font-semibold leading-snug text-white">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-lightGrey">
          <AiOutlineRead />
          <span>Read</span>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;
