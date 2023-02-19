"use client";

import { useState, MouseEvent, useCallback } from "react";
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
import useOverlay from "@/hooks/useOverlay";
import * as S from "./page.styles";
import "swiper/css";
import "./slider.css";

export default function Page({
  params,
  searchParams,
}: {
  params: { exhibitionId: string; artworkId: string };
  searchParams?: { edit: string | undefined };
}) {
  const exhibitionId = Number(params.exhibitionId);
  const artworkId = Number(params.artworkId);
  const edit = Boolean(searchParams?.edit);
  const router = useRouter();
  const [isShow, setIsShow] = useState(edit);
  const { isOpen: isOpenBottomSheet, open: openBottomSheet, close: closeBottomSheet } = useOverlay(edit);

  const [swiper, setSwiper] = useState<TSwiper | null>(null);
  const [activeArtworkId, setActiveArtworkId] = useState(artworkId);

  const { data: artworkThumbnailList } = useGetArtworkList(exhibitionId);
  const { data: artworkInfo } = useGetArtworkInfo(activeArtworkId);
  const { mutate } = useUpdateArtworkInfo();

  const changeActiveArtworkId = (index: number) => {
    const activeArtworkId = artworkThumbnailList?.[index]?.id ?? 0;
    setActiveArtworkId(activeArtworkId);
  };

  const handleThumbnailClick = (index: number) => {
    return (e: MouseEvent) => {
      changeActiveArtworkId(index);
      swiper?.slideTo(index);
    };
  };

  const handleGoBackClick = () => {
    router.push(`exhibition/${exhibitionId}`);
  };

  const handleEditClick = () => {
    setIsShow(true);
    openBottomSheet();
  };

  const handleBottomSheetClose = useCallback(() => {
    setIsShow(false);
    setTimeout(closeBottomSheet, 250);
  }, []);

  const handleSave = (e: MouseEvent, formData: FormData) => {
    mutate(
      {
        artworkId: activeArtworkId,
        newArtworkInfo: formData,
      },
      {
        onSuccess: handleBottomSheetClose,
      }
    );
  };

  const initialSlideIndex = artworkThumbnailList?.findIndex((e) => e.id === artworkId);

  return (
    <S.Wrapper>
      <S.Overlay>
        <NavigationBar onGoBackClick={handleGoBackClick} onEditClick={handleEditClick} />
      </S.Overlay>
      <Swiper
        className="main-swiper"
        onSwiper={(swiper) => setSwiper(swiper)}
        initialSlide={initialSlideIndex}
        onSlideChange={({ activeIndex }) => {
          changeActiveArtworkId(activeIndex);
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
        {artworkThumbnailList?.map(({ id, imageURL }, i) => (
          <S.ThumbnailItem key={id} isActive={id === activeArtworkId} onClick={handleThumbnailClick(i)}>
            <Image alt="thumbnail" src={imageURL} fill style={{ borderRadius: "2px" }} />
          </S.ThumbnailItem>
        ))}
      </S.ThumbnailList>
      {isOpenBottomSheet && (
        <Portal>
          <Dimmed onClick={handleBottomSheetClose} />
          <S.BottomSheetWrapper isShow={isShow}>
            <EditBottomSheet defaultValues={artworkInfo} onSave={handleSave} />
          </S.BottomSheetWrapper>
        </Portal>
      )}
    </S.Wrapper>
  );
}
