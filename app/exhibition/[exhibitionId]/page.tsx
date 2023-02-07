"use client";

import { notFound } from "next/navigation";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { useGetPostInfo } from "@/hooks/exhibition";
import { useGetArtworkList } from "@/hooks/artwork";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  const {data: postInfo } = useGetPostInfo(exhibitionId);
  const {data: artworkList} = useGetArtworkList(exhibitionId);

  if (!postInfo) return notFound();;

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader postInfo={postInfo} />
      <S.Content>
        <ArtworkCardList
          exhibitionId={exhibitionId}
          artworkList={artworkList}
        />
      </S.Content>
    </S.Wrapper>
  );
}
