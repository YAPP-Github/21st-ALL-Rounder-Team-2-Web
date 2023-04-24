"use client";

import { useGetArtworkList } from "@/hooks/artwork";
import * as S from "./ArtworkCount.styles";

type Props = {
  exhibitionId: number;
};

export const ArtworkCount = ({ exhibitionId }: Props) => {
  const { data: artworkList } = useGetArtworkList(exhibitionId);

  return <S.Count>{artworkList?.length}개의 작품</S.Count>;
};
