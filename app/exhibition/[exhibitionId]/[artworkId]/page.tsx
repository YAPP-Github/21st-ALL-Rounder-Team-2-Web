"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as TSwiper } from "swiper/types";
import { getArtworkPageFromPost, getArtworkInfo } from "@/apis/artwork";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Tag from "@/components/ui/Tag/Tag/Tag";
import * as S from "./page.styles";
import "swiper/css";
import "./slider.css";

export default function Page({
  params,
}: {
  params: { exhibitionId: string; artworkId: string };
}) {
  const exhibitionId = Number(params.exhibitionId);
  const artworkId = Number(params.artworkId);

  const [swiper, setSwiper] = useState<TSwiper | null>(null);
  const [activeArtworkIndex, setActiveArtworkIndex] = useState(artworkId);

  const { data: artworkInfo } = useQuery({
    queryKey: ["artworkInfo", activeArtworkIndex],
    queryFn: () => getArtworkInfo(activeArtworkIndex),
    select: (data) => data.data,
  });

  const { data: artworkThumbnailList } = useQuery({
    queryKey: ["artworkList", exhibitionId],
    queryFn: () => getArtworkPageFromPost(exhibitionId),
    select: (data) => data.data.content,
  });

  const handleThumbnailClick = (index: number) => {
    return (e: MouseEvent) => {
      setActiveArtworkIndex(index);
      swiper?.slideTo(index - 1);
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
        initialSlide={activeArtworkIndex - 1}
        onSlideChange={({ activeIndex }) => {
          setActiveArtworkIndex(activeIndex + 1);
        }}
      >
        {artworkThumbnailList?.map(({ id, imageURL }) => (
          <SwiperSlide key={id}>
            <Image
              alt="작품 사진"
              src={imageURL}
              fill
              style={{ objectFit: "contain" }}
            />
            <S.ArtworkInfoWrapper>
              <S.Title>{artworkInfo?.name}</S.Title>
              <S.Artist>{artworkInfo?.artist} 작가</S.Artist>
              <S.TagList>
                {artworkInfo?.tags?.map(({ id, name }) => (
                  <li key={id}>
                    <Tag name={name} />
                  </li>
                ))}
              </S.TagList>
            </S.ArtworkInfoWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.ThumbnailList>
        {artworkThumbnailList?.map(({ id, imageURL }) => (
          <S.ThumbnailItem
            key={id}
            isActive={id === activeArtworkIndex}
            onClick={handleThumbnailClick(id)}
          >
            <Image
              alt="thumbnail"
              src={imageURL}
              fill
              style={{ borderRadius: "2px" }}
            />
          </S.ThumbnailItem>
        ))}
      </S.ThumbnailList>
    </S.Wrapper>
  );
}
