"use client";

import { notFound } from "next/navigation";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { useGetPostInfo } from "@/hooks/exhibition";
import { useGetArtworkList } from "@/hooks/artwork";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  const { data: postInfo } = useGetPostInfo(exhibitionId);
  const { data: artworkList } = useGetArtworkList(exhibitionId);

  if (!postInfo) return notFound();

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader postInfo={postInfo} />
      <S.Content>
        {artworkList ? (
          <ArtworkCardList exhibitionId={exhibitionId} artworkList={artworkList} />
        ) : (
          <S.Empty>
            <div>
              아직 남겨진 전시 기록이 없어요!
              <br />
              하단 버튼을 통해 자유롭게 전시를 기록해보아요
            </div>
            <button type="button">전시기록 하러가기</button>
          </S.Empty>
        )}
      </S.Content>
    </S.Wrapper>
  );
}
