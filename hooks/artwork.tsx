import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getArtworkPageFromPost, getArtworkInfo, setMainArtwork, deleteArtwork, updateArtwork } from "@/apis/artwork";
import { UpdateArtworkRequestDto } from "@/__generate__/artwork";

export const useGetArtworkList = (exhibitionId: number) => {
  return useQuery({
    queryKey: ["artworkList", exhibitionId],
    queryFn: () => getArtworkPageFromPost(exhibitionId),
    select: (data) => data.content,
  });
};

export const useGetArtworkInfo = (artworkId: number) => {
  return useQuery({
    queryKey: ["artworkInfo", artworkId],
    queryFn: () => getArtworkInfo(artworkId),
  });
};

export const useSetMainArtwork = (exhibitionId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (artworkId: number) => setMainArtwork(artworkId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postInfo", exhibitionId] });
    },
  });
};

export const useDeleteArtwork = (exhibitionId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (artworkId: number) => deleteArtwork(artworkId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["artworkList", exhibitionId],
      });
    },
  });
};

export const useDeleteLastArtwork = () => {
  return useMutation({
    mutationFn: (artworkId: number) => deleteArtwork(artworkId),
  });
};

export const useUpdateArtworkInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ artworkId, newArtworkInfo }: { artworkId: number; newArtworkInfo: UpdateArtworkRequestDto }) =>
      updateArtwork(artworkId, newArtworkInfo),
    onSuccess: (_, { artworkId }) => {
      queryClient.invalidateQueries(["artworkInfo", artworkId]);
    },
  });
};
