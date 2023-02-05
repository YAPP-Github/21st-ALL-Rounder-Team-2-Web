import { axiosInstance } from "@/libs/axios";
import { ArtworkControllerApiFactory } from "@/__generate__/artwork";

const factory = ArtworkControllerApiFactory(undefined, "", axiosInstance);

export const getArtworkPageFromPost = (
  exhibitionId: number,
  size: number = 5,
  page: number = 0
) => {
  return factory.getArtworkPageFromPost(exhibitionId, size, page);
};

export const getArtworkInfo = (artworkId: number) => {
  return factory.getArtworkInfo(artworkId);
};
