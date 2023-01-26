"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as TSwiper } from "swiper/types";
import NavigationBar from "../../../../components/ui/NavigationBar/NavigationBar";
import Tag from "../../../../components/ui/Tag/Tag/Tag";
import { getArtworkInfo, getArtworkList } from "../../../../apis/exhibition";
import * as S from "./page.styles";
import "swiper/css";
import "./slider.css";

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

  const [swiper, setSwiper] = useState<TSwiper | null>(null);
  const [activeArtworkIndex, setActiveArtworkIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    return (e: MouseEvent) => {
      setActiveArtworkIndex(index);
      swiper?.slideTo(index);
    };
  };

  const handleGoBackClick = () => {};

  const handleEditClick = () => {};

  return (
    <S.Wrapper>
      <S.Overlay>
        <NavigationBar
          onGoBackClick={handleGoBackClick}
          onEditClick={handleEditClick}
        />
      </S.Overlay>
      <Swiper
        className="main-swiper"
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={({ activeIndex }) => setActiveArtworkIndex(activeIndex)}
      >
        {artworkList?.map(({ id, imageUrl }) => (
          <SwiperSlide key={id}>
            <Image
              alt="작품 사진"
              src={imageUrl}
              fill
              style={{ objectFit: "contain" }}
            />
            <S.ArtworkInfoWrapper>
              <S.Title>{artworkInfo?.title}</S.Title>
              <S.Artist>{artworkInfo?.artist} 작가</S.Artist>
              <S.TagList>
                {artworkInfo?.tags?.map((tag) => (
                  <li key={tag}>
                    <Tag name={tag} />
                  </li>
                ))}
              </S.TagList>
            </S.ArtworkInfoWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.ThumbnailList>
        {artworkList?.map(({ imageUrl }, i) => (
          <S.ThumbnailItem
            key={i}
            isActive={i === activeArtworkIndex}
            onClick={handleThumbnailClick(i)}
          >
            <Image
              alt="thumbnail"
              src={imageUrl}
              fill
              style={{ borderRadius: "2px" }}
            />
          </S.ThumbnailItem>
        ))}
      </S.ThumbnailList>
    </S.Wrapper>
  );
}
