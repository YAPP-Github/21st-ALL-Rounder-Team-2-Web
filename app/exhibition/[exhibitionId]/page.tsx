"use client";

import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader exhibitionId={exhibitionId} />
      <S.Content>
        <ArtworkCardList exhibitionId={exhibitionId} />
      </S.Content>
    </S.Wrapper>
  );
}
