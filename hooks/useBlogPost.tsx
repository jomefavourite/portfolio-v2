import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Post } from "../app/api/blog/route";

export type { Post as PostResponse };

const getArticle = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>("/api/blog");
  return data;
};

export const useBlogPost = (_username?: string) => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: getArticle,
    refetchOnWindowFocus: false,
  });
};
