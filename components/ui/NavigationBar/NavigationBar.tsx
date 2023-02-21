import Icon, { IconType } from "../Icon/Icon/Icon";
import * as S from "./NavigationBar.styles";

export interface Props {
  className?: string;
  current?: string;
  goBack?: {
    name: IconType;
    size: number;
  };
  onGoBackClick: () => void;
  onEditClick?: () => void;
}

const NavigationBar = ({
  className,
  current,
  goBack = { name: "ArrowLeftIcon", size: 24 },
  onGoBackClick,
  onEditClick,
}: Props) => {
  return (
    <S.Wrapper className={className}>
      <S.Button onClick={onGoBackClick}>
        <Icon name={goBack.name} size={goBack.size} />
      </S.Button>
      <S.Title>{current}</S.Title>
      {onEditClick && <S.Button onClick={onEditClick}>편집</S.Button>}
    </S.Wrapper>
  );
};

export default NavigationBar;
