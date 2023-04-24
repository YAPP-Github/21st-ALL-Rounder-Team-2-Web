import { PropsWithChildren } from "react";
import { colors } from "@/styles/colors";
import Portal from "@/components/Portal/Portal";
import Dimmed from "@/components/Dimmed/Dimmed";
import * as S from "./Modal.styles";

type Props = {
  className?: string;
  onClose?: () => void;
};

const Modal = ({ className, onClose, children }: PropsWithChildren<Props>) => {
  return (
    <Portal>
      <Dimmed onClick={onClose} />
      <S.Modal className={className}>
        {onClose && (
          <S.CloseButton
            iconProps={{
              name: "MultiplyIcon",
              color: colors.gray400,
              size: 20,
            }}
            onClick={onClose}
          />
        )}
        {children}
      </S.Modal>
    </Portal>
  );
};

const Title = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return <S.Title className={className}>{children}</S.Title>;
};

const Description = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return <S.Description className={className}>{children}</S.Description>;
};

Modal.Title = Title;
Modal.Description = Description;

export default Modal;
