import Link from "next/link";
import React from "react";
import { PostResponse } from "../hooks/useBlogPost";
import { AiOutlineRead } from "react-icons/ai";

type ArticleCardProps = { post: PostResponse };

function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Link
      href={`https://favouritejome.hashnode.dev/${post.slug}`}
      className='block bg-darkCard p-5'
    >
      <p className='text-sm'>{new Date(post.dateAdded).toDateString()}</p>
      <h3 className='mt-6 text-lg'>{post.title}</h3>

      <div className='mt-5 flex items-center gap-2 text-sm'>
        <AiOutlineRead />
        <p>Read</p>
      </div>
    </Link>
  );
}

export default ArticleCard;
