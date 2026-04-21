import React from "react";
import Image from "next/image";
import { PostResponse } from "../hooks/useBlogPost";
import { AiOutlineRead } from "react-icons/ai";
import Card from "./Card";

type ArticleCardProps = { post: PostResponse };

function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Card>
      <a
        href={`https://favouritejome.hashnode.dev/${post.slug}`}
        className="flex h-full flex-col"
        target="_blank"
        rel="noreferrer"
      >
        {post.coverImage?.url && (
          <div className="relative mb-4 h-40 w-full overflow-hidden rounded">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover transition duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-sm text-lightGrey">
              {new Date(post.publishedAt).toDateString()}
            </p>
            <h3 className="mt-3 text-lg leading-snug">{post.title}</h3>
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-lightGrey">
            <AiOutlineRead />
            <p>Read</p>
          </div>
        </div>
      </a>
    </Card>
  );
}

export default ArticleCard;
