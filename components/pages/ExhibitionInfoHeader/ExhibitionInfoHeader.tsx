"use client";

import Image from "next/image";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Icon from "@/components/ui/Icon/Icon/Icon";
import ImageUploadSelectModal from "../ImageUploadSelectModal/ImageUploadSelectModal";
import { colors } from "@/styles/colors";
import useOverlay from "@/hooks/useOverlay";
import { useGetPostInfo } from "@/hooks/exhibition";
import { sendMessage } from "@/libs/message/message";
import * as S from "./ExhibitionInfoHeader.styles";

type Props = {
  exhibitionId: number;
};

const ExhibitionInfoHeader = ({ exhibitionId }: Props) => {
  const { isShow, showOverlay, hideOverlay } = useOverlay();
  const { data: postInfo } = useGetPostInfo(exhibitionId);

  if (!postInfo) return null;
  const { mainImage, categoryName, name, postDate } = postInfo;

  const handleGoBackClick = () => {
    sendMessage(["GO_BACK"]);
  };

  const handleEditClick = () => {
    sendMessage(["NAVIGATE_TO_EXHIBIT_EDIT", postInfo]);
  };

  const handleExhibitionWorkAdd = () => {
    showOverlay();
  };

  return (
    <>
      {isShow && <ImageUploadSelectModal onClose={hideOverlay} />}
      <S.Header>
        {mainImage && <Image alt="대표 사진" src={mainImage} fill style={{ objectFit: "cover" }} />}
        <S.GradientOverlay>
          <NavigationBar onGoBackClick={handleGoBackClick} onEditClick={handleEditClick} />
          <S.Content>
            <S.ExhibitionInfo>
              <S.Category>{categoryName}</S.Category>
              <S.Title>{name}</S.Title>
              <S.Date>{postDate}</S.Date>
            </S.ExhibitionInfo>
            <S.ExhibitionWorkAddButton onClick={handleExhibitionWorkAdd}>
              작품추가
              <Icon name="PlusIcon" size={18} color={colors.blue} />
            </S.ExhibitionWorkAddButton>
          </S.Content>
        </S.GradientOverlay>
      </S.Header>
    </>
  );
};

export default ExhibitionInfoHeader;
