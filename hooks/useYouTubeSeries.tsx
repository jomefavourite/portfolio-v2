import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Episode } from "../app/api/youtube/route";

export type { Episode };

const getEpisodes = async (): Promise<Episode[]> => {
  const { data } = await axios.get<Episode[]>("/api/youtube");
  return data;
};

export const useYouTubeSeries = () =>
  useQuery(["youtube-series"], getEpisodes, { refetchOnWindowFocus: false });
