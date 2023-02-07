import { useQuery } from "@tanstack/react-query";
import { getPostInfoWithCategory } from "@/apis/exhibition";

export const useGetPostInfo = (exhibitionId: number) => {
    return useQuery({
    queryKey: ["postInfo", exhibitionId],
    queryFn: () => getPostInfoWithCategory(exhibitionId),
  })
}