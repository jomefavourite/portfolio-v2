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
  dateAdded: string;
}

const getArticle = async () => {
  const response = await axios({
    url: endpoint,
    method: "POST",
    data: {
      query: ARTICLE_QUERY,
    },
  });

  const edges = response.data.data.publication.posts.edges as {
    node: { title: string; slug: string; publishedAt: string };
  }[];

  return edges.map(({ node }) => ({
    title: node.title,
    slug: node.slug,
    dateAdded: node.publishedAt,
  })) as PostResponse[];
};

export const useBlogPost = (username: string) => {
  const blogpost = useQuery(["articles", username], getArticle, {
    refetchOnWindowFocus: false,
  });

  return blogpost;
};
