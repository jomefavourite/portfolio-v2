import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const endpoint = "https://api.hashnode.com/";
const ARTICLE_QUERY = `
  {
    user(username: "Favourite") {
      publication {
        posts(page: 0) {
          title
          slug
          dateAdded
        }
      }
    }
  }
`;

export interface PostResponse {
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
}

export const useBlogPost = (username: string) => {
  const blogpost = useQuery(["articles", username], async () => {
    const response = await axios({
      url: endpoint,
      method: "POST",
      data: {
        query: ARTICLE_QUERY,
      },
    });

    // console.log(response.data.data.user.publication.posts);

    return response.data.data.user.publication.posts as PostResponse[];
  });

  return blogpost;
};
