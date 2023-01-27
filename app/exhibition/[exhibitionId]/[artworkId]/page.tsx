"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Tag from "@/components/ui/Tag/Tag/Tag";
import { Divider } from "@/components/ui/Divider/Divider";
import { getArtworkInfo, getArtworkList } from "@/apis/exhibition";
import * as S from "./page.styles";

export default function Page({
  params,
}: {
  params: { exhibitionId: string; artworkId: string };
}) {
  const { exhibitionId, artworkId } = params;
  const { data: artworkInfo } = useQuery({
    queryKey: ["artwork", artworkId],
    queryFn: () => getArtworkInfo(artworkId),
  });

  const { data: artworkList } = useQuery({
    queryKey: ["artworkList", exhibitionId],
    queryFn: () => getArtworkList(exhibitionId),
  });

  const handleGoBackClick = () => {};

  const handleEditClick = () => {};

  return (
    <S.Wrapper>
      {artworkList && (
        <Image
          alt="작품 사진"
          src={artworkList[0].imageUrl}
          fill
          style={{ objectFit: "cover" }}
        />
      )}
      <S.Overlay>
        <NavigationBar
          onGoBackClick={handleGoBackClick}
          onEditClick={handleEditClick}
        />
        <S.Content>
          <S.Title>{artworkInfo?.title}</S.Title>
          <S.Artist>{artworkInfo?.artist} 작가</S.Artist>
          <S.CategoryListWrapper>
            {artworkInfo?.tags?.map((tag) => (
              <li key={tag}>
                <Tag name={tag} />
              </li>
            ))}
          </S.CategoryListWrapper>
          <Divider />
          <S.ThumbnailListWrapper>
            {artworkList?.map(({ imageUrl }, i) => (
              <S.ThumbnailItem key={i}>
                <Image
                  alt="thumbnail"
                  src={imageUrl}
                  width={52}
                  height={52}
                  style={{ borderRadius: "2px" }}
                />
              </S.ThumbnailItem>
            ))}
          </S.ThumbnailListWrapper>
        </S.Content>
      </S.Overlay>
    </S.Wrapper>
  );
}
