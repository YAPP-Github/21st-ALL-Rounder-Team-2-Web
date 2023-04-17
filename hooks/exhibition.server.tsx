import { getAllPostPage, getPostInfoWithCategory } from "@/apis/exhibition";
import { getQueryClient } from "@/libs/react-query-ssr/getQueryClient";

export const useFetchExhibitionList = async (direction: "ASC" | "DESC", category?: number) => {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchInfiniteQuery({
    queryKey: ["getAllPostPage", { direction, category }],
    queryFn: ({ pageParam = 0 }) => getAllPostPage({ page: pageParam, direction, category }),
  });
  return data;
};

export const useFetchPostInfo = async (exhibitionId: number) => {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: ["postInfo", exhibitionId],
    queryFn: () => getPostInfoWithCategory(exhibitionId),
  });
  return data;
};
