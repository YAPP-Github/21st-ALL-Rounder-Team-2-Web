import { axiosInstance } from "@/libs/axios";
import { ArtworkControllerApiFactory, UpdateArtworkRequestDto } from "@/__generate__/artwork";

const factory = ArtworkControllerApiFactory(undefined, undefined, axiosInstance);

export const getArtworkPageFromPost = async (exhibitionId: number, size: number = 5, page: number = 0) => {
  const response = await factory.getArtworkPageFromPost(exhibitionId, size, page);
  return response.data;
};

export const getArtworkInfo = async (artworkId: number) => {
  const response = await factory.getArtworkInfo(artworkId);
  return response.data;
};

export const setMainArtwork = (artworkId: number) => {
  return factory.setMainArtwork(artworkId);
};

export const deleteArtwork = (artworkId: number) => {
  return factory.deleteArtwork(artworkId);
};

export const updateArtwork = (artworkId: number, newArtworkInfo: UpdateArtworkRequestDto) => {
  return factory.updateArtwork(artworkId, newArtworkInfo);
};
