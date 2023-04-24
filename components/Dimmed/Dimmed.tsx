import * as S from "./Dimmed.styles";

type Props = {
  onClick?: () => void;
};

const Dimmed = ({ onClick }: Props) => {
  return <S.Dimmed onClick={onClick} />;
};

export default Dimmed;
