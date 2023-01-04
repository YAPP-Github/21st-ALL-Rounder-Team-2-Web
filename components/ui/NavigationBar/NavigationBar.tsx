import Icon from "../Icon/Icon/Icon";
import * as S from "./NavigationBar.styles";

export interface Props {
  current?: string;
  onGoBack: () => void;
  onEdit?: () => void;
}

const NavigationBar = ({ current, onGoBack, onEdit }: Props) => {
  return (
    <S.Wrapper>
      <S.Button onClick={onGoBack}>
        <Icon name="ChevronLeftIcon" size={12} />
      </S.Button>
      <S.Title>{current}</S.Title>
      <S.Button onClick={onEdit}>편집</S.Button>
    </S.Wrapper>
  );
};

export default NavigationBar;
