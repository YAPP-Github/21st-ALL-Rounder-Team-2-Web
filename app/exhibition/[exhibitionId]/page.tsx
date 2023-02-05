"use client";

import { useQuery } from "@tanstack/react-query";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { getPostInfoWithCategory } from "@/apis/exhibition";
import { getArtworkPageFromPost } from "@/apis/artwork";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  const { data: postInfo } = useQuery({
    queryKey: ["postInfo", exhibitionId],
    queryFn: () => getPostInfoWithCategory(exhibitionId),
  });

  const { data: artworkList } = useQuery({
    queryKey: ["artworkList", exhibitionId],
    queryFn: () => getArtworkPageFromPost(exhibitionId),
  });

  if (!postInfo?.data) return null;

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader postInfo={postInfo.data} />
      <S.Content>
        <ArtworkCardList
          exhibitionId={exhibitionId}
          artworkList={artworkList?.data?.content ?? []}
        />
      </S.Content>
    </S.Wrapper>
  );
}
