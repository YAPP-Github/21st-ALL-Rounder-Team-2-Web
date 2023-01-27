"use client";

import { useQuery } from "@tanstack/react-query";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { getArtworkList } from "@/apis/exhibition";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const { data: artworkList } = useQuery({
    queryKey: ["artworkList"],
    queryFn: () => getArtworkList(params.exhibitionId),
  });

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader mainImageUrl={artworkList?.[0].imageUrl ?? null} />
      <S.Content>
        <ArtworkCardList artworkList={artworkList ?? []} />
      </S.Content>
    </S.Wrapper>
  );
}
