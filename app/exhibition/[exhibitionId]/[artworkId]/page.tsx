"use client";

import { useState, MouseEvent } from "react";
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

export default function Page({
  params,
  searchParams,
}: {
  params: { exhibitionId: string; artworkId: string };
  searchParams?: { [key: string]: string };
}) {
  const exhibitionId = Number(params.exhibitionId);
  const artworkId = Number(params.artworkId);
  const router = useRouter();
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  const [activeArtworkId, setActiveArtworkId] = useState(artworkId);
  const [isEdit, setIsEdit] = useState(Boolean(searchParams?.edit));

  const { data: artworkThumbnailList } = useGetArtworkList(exhibitionId);
  const { data: artworkInfo } = useGetArtworkInfo(activeArtworkId);
  const { mutate } = useUpdateArtworkInfo();

  const changeActiveArtworkId = (id: number) => {
    setActiveArtworkId(id);
    window?.history.replaceState({ ...window.history.state }, "", `${id}`);
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
    setIsEdit(true);
    window?.history.replaceState({ ...window.history.state }, "", `${activeArtworkId}?edit=true`);
  };

  const handleSave = (e: MouseEvent, formData: FormData) => {
    setIsEdit(false);
    window?.history.replaceState({ ...window.history.state }, "", `${activeArtworkId}`);
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
                {/** TagDto 필드가 nullable */}
                {artworkInfo?.tags?.map(
                  ({ id, name }) =>
                    name && (
                      <li key={id}>
                        <Tag name={name} />
                      </li>
                    )
                )}
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
      {isEdit && (
        <Portal>
          <Dimmed />
          <S.BottomSheetWrapper>
            <EditBottomSheet onSave={handleSave} />
          </S.BottomSheetWrapper>
        </Portal>
      )}
    </S.Wrapper>
  );
}
