"use client";

import { useQuery } from "@tanstack/react-query";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { getDraftArtworkList } from "@/apis/exhibition";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import * as S from "./page.styles";

export default function Page() {
  const { data: draftArtworkList } = useQuery({
    queryKey: ["draftArtworkList"],
    queryFn: getDraftArtworkList,
  });

  const handleSaveBtnClick = () => {};

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader
        mainImageUrl={draftArtworkList?.[0].imageUrl ?? null}
      />
      <S.Content>
        <ArtworkCardList artworkList={draftArtworkList ?? []} />
      </S.Content>
      <S.GradientDimmed />
      <S.SaveButton type="primary" onClick={handleSaveBtnClick}>
        전시기록 완성
      </S.SaveButton>
    </S.Wrapper>
  );
}
