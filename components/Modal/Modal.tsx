import { IconButton } from "@/components/Button/IconButton/IconButton";
import { colors } from "@/styles/colors";
import * as S from "./Modal.styles";

type Props = {
  headline?: string;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal = ({ headline, onClose, children }: Props) => {
  return (
    <S.Container>
      <S.Headline>
        <div>
          <IconButton
            iconProps={{
              name: "MultiplyIcon",
              color: colors.gray400,
              size: 20,
            }}
            onClick={onClose}
          />
        </div>
        <span>{headline}</span>
      </S.Headline>
      <S.Body>{children}</S.Body>
    </S.Container>
  );
};

export default Modal;
