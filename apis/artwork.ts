import { axiosInstance } from "@/libs/axios";
import { ArtworkControllerApiFactory, Pageable } from "@/__generate__/artwork";

const factory = ArtworkControllerApiFactory(undefined, "", axiosInstance);

export const getArtworkPageFromPost = (
  exhibitionId: number,
  pageable: Pageable
) => {
  return factory.getArtworkPageFromPost(exhibitionId, pageable);
};
