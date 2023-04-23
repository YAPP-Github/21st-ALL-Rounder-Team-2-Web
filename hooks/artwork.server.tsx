import { getArtworkPageFromPost } from "@/apis/artwork";
import { getQueryClient } from "@/libs/react-query-ssr/getQueryClient";
import { cache } from "react";

export const useFetchArtworkList = cache(async (exhibitionId: number) => {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: ["artworkList", exhibitionId],
    queryFn: () => getArtworkPageFromPost(exhibitionId),
  });
  return data;
});
