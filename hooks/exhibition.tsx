import { useMutation, useQuery, useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPostPage, getIndexHtmlByLink, getPostInfoWithCategory, togglePinById } from "@/apis/exhibition";

export const useGetExhibitionList = (direction: "ASC" | "DESC", category?: number) => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["getAllPostPage", { direction, category }],
    queryFn: ({ pageParam = 0 }) => getAllPostPage({ page: pageParam, direction, category }),
    getNextPageParam: (lastPage, pages) => (!lastPage.last ? pages.length : undefined),
  });

  return { allPostInfo: data?.pages.map((page) => page.content ?? []).flat() ?? [], fetchNextPage };
};

export const useGetPostInfo = (exhibitionId: number) => {
  return useQuery({
    queryKey: ["postInfo", exhibitionId],
    queryFn: () => getPostInfoWithCategory(exhibitionId),
  });
};

export const useTogglePinById = (direction: "ASC" | "DESC") => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, category, pinned }: { id: number; category?: number; pinned?: boolean }) =>
      togglePinById(id, Boolean(category), pinned),
    onSuccess: (_, { category }) => {
      queryClient.invalidateQueries(["getAllPostPage", { direction, category }]);
    },
  });
};

export const useGetIndexHtmlByLink = (link: string) => {
  return useQuery({
    queryKey: ["indexHtmlByLink", link],
    queryFn: () => getIndexHtmlByLink(link),
    staleTime: Infinity,
  });
};
