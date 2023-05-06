"use client";

import Image from "next/image";
import Icon from "@/components/Icon/Icon/Icon";
import ImageUploadSelectModal from "../ImageUploadSelectModal/ImageUploadSelectModal";
import { colors } from "@/styles/colors";
import useOverlay from "@/hooks/useOverlay";
import { useToast } from "@/hooks/useToast";
import { useGetPostInfo } from "@/hooks/exhibition";
import { useGetArtworkQueryData } from "@/hooks/artwork";
import * as S from "./ExhibitInformationHeader.styles";

type Props = {
  exhibitionId: number;
};

export const ExhibitInformationHeader = ({ exhibitionId }: Props) => {
  const { data: postInfo } = useGetPostInfo(exhibitionId);
  const { mainImage, categoryName, name, postDate } = { ...postInfo };
  const { getArtworkListFromQueryCache } = useGetArtworkQueryData();
  const overlay = useOverlay();
  const toast = useToast();

  const handleArtworkAdd = () => {
    const artworkList = getArtworkListFromQueryCache(exhibitionId);
    if (!artworkList?.totalElements) return;

    if (artworkList.totalElements < 5) overlay.open();
    else toast.open({ type: "alert", content: "작품은 5개까지 등록할 수 있어요!" });
  };

  return (
    <>
      {overlay.isOpen && <ImageUploadSelectModal exhibitionId={exhibitionId} onClose={overlay.close} />}
      <S.Header>
        {mainImage && <Image alt="대표 사진" src={mainImage} fill style={{ objectFit: "cover" }} priority />}
        <S.GradientOverlay>
          <S.Content>
            <S.ExhibitionInfo>
              <S.Category>{categoryName}</S.Category>
              <S.Title>{name}</S.Title>
              <S.Date>{postDate}</S.Date>
            </S.ExhibitionInfo>
            <S.ArtworkAddButton onClick={handleArtworkAdd}>
              작품추가
              <Icon name="PlusIcon" size={18} color={colors.green900} />
            </S.ArtworkAddButton>
          </S.Content>
        </S.GradientOverlay>
      </S.Header>
    </>
  );
};
