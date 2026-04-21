import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const endpoint = "https://gql.hashnode.com/";

const ARTICLE_QUERY = `
  {
    publication(host: "favouritejome.hashnode.dev") {
      posts(first: 6) {
        edges {
          node {
            title
            slug
            publishedAt
          }
        }
      }
    }
  }
`;

export interface PostResponse {
  title: string;
  slug: string;
  publishedAt: string;
}

const getArticle = async (): Promise<PostResponse[]> => {
  const response = await axios.post(endpoint, { query: ARTICLE_QUERY });
  const edges = response.data.data.publication.posts.edges as { node: PostResponse }[];
  return edges.map((edge) => edge.node);
};

export const useBlogPost = (_username?: string) => {
  return useQuery(["articles"], getArticle, {
    refetchOnWindowFocus: false,
  });
};
