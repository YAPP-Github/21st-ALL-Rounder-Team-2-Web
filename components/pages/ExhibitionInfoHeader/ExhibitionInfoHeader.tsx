import Image from "next/image";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar";
import Icon from "@/components/ui/Icon/Icon/Icon";
import ImageUploadSelectModal from "../ImageUploadSelectModal/ImageUploadSelectModal";
import { colors } from "@/styles/colors";
import useOverlay from "@/hooks/useOverlay";
import * as S from "./ExhibitionInfoHeader.styles";

const ExhibitionInfoHeader = ({
  mainImageUrl,
}: {
  mainImageUrl: string | null;
}) => {
  const { isShow, showOverlay, hideOverlay } = useOverlay();

  const handleGoBackClick = () => {};

  const handleEditClick = () => {};

  const handleExhibitionWorkAdd = () => {
    showOverlay();
  };

  return (
    <>
      {isShow && <ImageUploadSelectModal onClose={hideOverlay} />}
      <S.Header>
        {mainImageUrl && (
          <Image
            alt="대표 사진"
            src={mainImageUrl}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
        <S.GradientOverlay>
          <NavigationBar
            onGoBackClick={handleGoBackClick}
            onEditClick={handleEditClick}
          />
          <S.Content>
            <S.ExhibitionInfo>
              <S.Category>카테고리 명</S.Category>
              <S.Title>목조형가구학과 졸전</S.Title>
              <S.Date>2022년 12월 9일</S.Date>
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
