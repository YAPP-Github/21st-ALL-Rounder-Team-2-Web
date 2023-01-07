import Image from "next/image";
import NavigationBar from "../../ui/NavigationBar/NavigationBar";
import Icon from "../../ui/Icon/Icon/Icon";
import * as S from "./ExhibitionInfoHeader.styles";

const ExhibitionInfoHeader = ({
  mainImageUrl,
}: {
  mainImageUrl: string | null;
}) => {
  const handleGoBackClick = () => {};

  const handleEditClick = () => {};

  const handleExhibitionWorkAdd = () => {};

  return (
    <>
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
            current="전시정보"
            onGoBackClick={handleGoBackClick}
            onEditClick={handleEditClick}
          />
          <S.Category>
            <Icon name="BookmarkTagIcon" />
            <span>카테고리 명</span>
          </S.Category>
          <S.Exhibition>
            <S.ExhibitionInfo>
              <h2>목조형가구학과 졸전</h2>
              <span>2022년 12월 9일</span>
            </S.ExhibitionInfo>
            <S.ExhibitionWorkAddButton onClick={handleExhibitionWorkAdd}>
              작품 추가
              <Icon name="PlusIcon" size={18} color="#ffffff" />
            </S.ExhibitionWorkAddButton>
          </S.Exhibition>
        </S.GradientOverlay>
      </S.Header>
    </>
  );
};

export default ExhibitionInfoHeader;
