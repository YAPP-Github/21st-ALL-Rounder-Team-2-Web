"use client";

import { useState } from "react";
import Link from "next/link";
import { useGetArtworkList } from "@/hooks/artwork";
import { ArtworkEditActionSheet } from "@/components/pages/ArtworkCardList/ArtworkEditActionSheet";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import useOverlay from "@/hooks/useOverlay";
import * as S from "./ArtworkCardList.styles";

interface Props {
  exhibitionId: number;
}

const ArtworkCardList = ({ exhibitionId }: Props) => {
  const { data: artworkList } = useGetArtworkList(exhibitionId);
  const { isOpen, open, close } = useOverlay();
  const [selectedArtworkId, setSelectedArtworkId] = useState(-1);

  const handleMoreBtnClick = (artworkId: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedArtworkId(artworkId);
    open();
  };

  return (
    <S.Wrapper>
      {artworkList?.map((artwork) => (
        <li key={artwork.id}>
          <Link href={`/exhibition/${exhibitionId}/${artwork.id}`}>
            <ArtworkCard {...artwork} onMoreBtnClick={handleMoreBtnClick(artwork.id)} />
          </Link>
        </li>
      ))}
      <ArtworkEditActionSheet
        isOpen={isOpen}
        onClose={close}
        exhibitionId={exhibitionId}
        artworkId={selectedArtworkId}
        isLastArtwork={artworkList?.length === 1}
      />
    </S.Wrapper>
  );
};

export default ArtworkCardList;
