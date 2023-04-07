import { getPostInfoWithCategory } from "@/apis/exhibition";
import { getQueryClient } from "@/libs/react-query-ssr/getQueryClient";

export const useFetchPostInfo = async (exhibitionId: number) => {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: ["postInfo", exhibitionId],
    queryFn: () => getPostInfoWithCategory(exhibitionId),
  });
  return data;
};
