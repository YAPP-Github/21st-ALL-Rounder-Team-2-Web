"use client";

import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "@/components/Icon/Icon/Icon";
import ImageUploadSelectModal from "../ImageUploadSelectModal/ImageUploadSelectModal";
import { colors } from "@/styles/colors";
import useOverlay from "@/hooks/useOverlay";
import { useToast } from "@/hooks/useToast";
import { useGetPostInfo } from "@/hooks/exhibition";
import { ArtworkThumbnailDtoPage } from "@/__generate__/artwork";
import * as S from "./ExhibitInformationHeader.styles";

type Props = {
  exhibitionId: number;
};

export const ExhibitInformationHeader = ({ exhibitionId }: Props) => {
  const { data: postInfo } = useGetPostInfo(exhibitionId);
  const { mainImage, categoryName, name, postDate } = { ...postInfo };
  const { isOpen: isOpenModal, open, close } = useOverlay();
  const toast = useToast();

  const queryClient = useQueryClient();

  const handleArtworkAdd = () => {
    const artworkList = queryClient.getQueryData<ArtworkThumbnailDtoPage>(["artworkList", exhibitionId]);
    if (!artworkList?.totalElements) return;

    if (artworkList?.totalElements < 5) open();
    else toast.open({ type: "alert", content: "작품은 5개까지 등록할 수 있어요!" });
  };

  return (
    <>
      {isOpenModal && <ImageUploadSelectModal onClose={close} />}
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
