import React from "react";
import { PostResponse } from "../hooks/useBlogPost";
import { AiOutlineRead } from "react-icons/ai";
import Card from "./Card";

type ArticleCardProps = { post: PostResponse };

function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Card>
      <a
        href={`https://favouritejome.hashnode.dev/${post.slug}`}
        className='flex h-full flex-col justify-between'
        target='_blank'
        rel='noreferrer'
      >
        <p className='text-sm text-lightGrey'>
          {new Date(post.dateAdded).toDateString()}
        </p>

        <h3 className='mt-6 text-lg'>{post.title}</h3>

        <div className='mt-5 flex items-center gap-2 text-sm text-lightGrey'>
          <AiOutlineRead />
          <p>Read</p>
        </div>
      </a>
    </Card>
  );
}

export default ArticleCard;
