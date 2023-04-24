"use client";

import Image from "next/image";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Icon from "@/components/Icon/Icon/Icon";
import ImageUploadSelectModal from "../ImageUploadSelectModal/ImageUploadSelectModal";
import { colors } from "@/styles/colors";
import useOverlay from "@/hooks/useOverlay";
import { sendMessage } from "@/libs/message/message";
import { useGetPostInfo } from "@/hooks/exhibition";
import * as S from "./ExhibitInformationHeader.styles";

type Props = {
  exhibitionId: number;
};

export const ExhibitInformationHeader = ({ exhibitionId }: Props) => {
  const { data: postInfo } = useGetPostInfo(exhibitionId);
  const { mainImage, categoryName, name, postDate } = { ...postInfo };
  const { isOpen: isOpenModal, open, close } = useOverlay();

  const handleGoBackClick = () => {
    sendMessage(["GO_BACK"]);
  };

  const handleEditClick = () => {
    if (!postInfo) return;
    sendMessage(["NAVIGATE_TO_EXHIBIT_EDIT", postInfo]);
  };

  const handleArtworkAdd = () => {
    open();
  };

  return (
    <>
      {isOpenModal && <ImageUploadSelectModal onClose={close} />}
      <S.Header>
        {mainImage && <Image alt="대표 사진" src={mainImage} fill style={{ objectFit: "cover" }} priority />}
        <S.GradientOverlay>
          <NavigationBar onGoBackClick={handleGoBackClick} onEditClick={handleEditClick} />
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
