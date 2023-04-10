import { getArtworkPageFromPost } from "@/apis/artwork";
import { getQueryClient } from "@/libs/react-query-ssr/getQueryClient";

export const useFetchArtworkList = async (exhibitionId: number) => {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: ["artworkList", exhibitionId],
    queryFn: () => getArtworkPageFromPost(exhibitionId),
  });
  return data;
};
