"use client";

import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import CustomSuspense from "@/components/ui/CustomSuspense/CustomSuspense";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);

  return (
    <S.Wrapper>
      <CustomSuspense>
        <ExhibitionInfoHeader exhibitionId={exhibitionId} />
      </CustomSuspense>
      <S.Content>
        <CustomSuspense>
          <ArtworkCardList exhibitionId={exhibitionId} />
        </CustomSuspense>
      </S.Content>
    </S.Wrapper>
  );
}
