import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostInfoWithCategory, togglePinById } from "@/apis/exhibition";

export const useGetPostInfo = (exhibitionId: number) => {
  return useQuery({
    queryKey: ["postInfo", exhibitionId],
    queryFn: () => getPostInfoWithCategory(exhibitionId),
  });
};

export const useTogglePinById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, category, pinned }: { id: number; category?: boolean; pinned?: boolean }) =>
      togglePinById(id, category, pinned),
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllPostPage"]);
    },
  });
};
