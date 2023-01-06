import Icon from "../Icon/Icon/Icon";
import * as S from "./NavigationBar.styles";

export interface Props {
  current?: string;
  onGoBackClick: () => void;
  onEditClick?: () => void;
}

const NavigationBar = ({ current, onGoBackClick, onEditClick }: Props) => {
  return (
    <S.Wrapper>
      <S.Button onClick={onGoBackClick}>
        <Icon name="ChevronLeftIcon" size={12} />
      </S.Button>
      <S.Title>{current}</S.Title>
      <S.Button onClick={onEditClick}>편집</S.Button>
    </S.Wrapper>
  );
};

export default NavigationBar;
