"use client";

import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { useGetPostInfo } from "@/hooks/exhibition";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  const { data: postInfo } = useGetPostInfo(exhibitionId);

  return (
    <>
      <S.Wrapper>
        <ExhibitionInfoHeader postInfo={postInfo} />
        <S.Content>
          <ArtworkCardList exhibitionId={exhibitionId} />
        </S.Content>
      </S.Wrapper>
    </>
  );
}
