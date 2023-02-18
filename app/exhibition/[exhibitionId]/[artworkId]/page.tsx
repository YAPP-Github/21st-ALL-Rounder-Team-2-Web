"use client";

import { useState, MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as TSwiper } from "swiper/types";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Tag from "@/components/ui/Tag/Tag/Tag";
import EditBottomSheet from "@/components/pages/EditBottomSheet/EditBottomSheet/EditBottomSheet";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import Portal from "@/components/ui/Portal/Portal";
import { FormData } from "@/components/pages/EditBottomSheet/EditBottomSheet/EditBottomSheet";
import { useGetArtworkInfo, useGetArtworkList, useUpdateArtworkInfo } from "@/hooks/artwork";
import * as S from "./page.styles";
import "swiper/css";
import "./slider.css";

export default function Page({ params }: { params: { exhibitionId: string; artworkId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  const artworkId = Number(params.artworkId);
  const router = useRouter();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [swiper, setSwiper] = useState<TSwiper | null>(null);
  const [activeArtworkId, setActiveArtworkId] = useState(artworkId);

  const { data: artworkThumbnailList } = useGetArtworkList(exhibitionId);
  const { data: artworkInfo } = useGetArtworkInfo(activeArtworkId);
  const { mutate } = useUpdateArtworkInfo();

  const changeActiveArtworkId = (id: number) => {
    setActiveArtworkId(id);
    navigate(`exhibition/${exhibitionId}/${id}`);
  };

  const handleThumbnailClick = (id: number) => {
    return (e: MouseEvent) => {
      changeActiveArtworkId(id);
      swiper?.slideTo(id - 1);
    };
  };

  const handleGoBackClick = () => {
    router.push(`exhibition/${exhibitionId}`);
  };

  const handleEditClick = () => {
    navigate({ pathname: `exhibition/${exhibitionId}/${artworkId}`, search: "?edit=true" });
  };

  const handleSave = (e: MouseEvent, formData: FormData) => {
    const { artist, name, tags } = formData;
    mutate({
      artworkId: activeArtworkId,
      newArtworkInfo: { artist, name, tags },
    });
    navigate(`exhibition/${exhibitionId}/${artworkId}`);
  };

  return (
    <S.Wrapper>
      <S.Overlay>
        <NavigationBar onGoBackClick={handleGoBackClick} onEditClick={handleEditClick} />
      </S.Overlay>
      <Swiper
        className="main-swiper"
        onSwiper={(swiper) => setSwiper(swiper)}
        initialSlide={activeArtworkId - 1}
        onSlideChange={({ activeIndex }) => {
          changeActiveArtworkId(activeIndex + 1);
        }}
      >
        {artworkThumbnailList?.map(({ id, imageURL }) => (
          <SwiperSlide key={id}>
            <Image alt="작품 사진" src={imageURL} fill style={{ objectFit: "contain" }} />
            <S.ArtworkInfoWrapper>
              <S.Title>{artworkInfo?.name}</S.Title>
              <S.Artist>{artworkInfo?.artist} 작가</S.Artist>
              <S.TagList>
                {artworkInfo?.tags?.map((tag) => (
                  <li key={id}>
                    <Tag name={tag} />
                  </li>
                ))}
              </S.TagList>
            </S.ArtworkInfoWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.ThumbnailList>
        {artworkThumbnailList?.map(({ id, imageURL }) => (
          <S.ThumbnailItem key={id} isActive={id === activeArtworkId} onClick={handleThumbnailClick(id)}>
            <Image alt="thumbnail" src={imageURL} fill style={{ borderRadius: "2px" }} />
          </S.ThumbnailItem>
        ))}
      </S.ThumbnailList>
      {searchParams.get("edit") && (
        <Portal>
          <Dimmed />
          <S.BottomSheetWrapper>
            <EditBottomSheet defaultValues={artworkInfo} onSave={handleSave} />
          </S.BottomSheetWrapper>
        </Portal>
      )}
    </S.Wrapper>
  );
}
