import { PropsWithChildren } from "react";
import Animated from "@/components/ui/Animated/Animated";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import Portal from "@/components/ui/Portal/Portal";
import * as S from "./ActionSheet.styles";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ActionSheet = ({ isOpen, onClose, children }: PropsWithChildren<Props>) => {
  return (
    <Portal>
      <Animated isOpen={isOpen}>
        <Dimmed onClick={onClose} />
        <S.Wrapper isOpen={isOpen}>
          <S.ActionList>{children}</S.ActionList>
          <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
        </S.Wrapper>
      </Animated>
    </Portal>
  );
};

type ActionItemProps = {
  onClick?: () => void;
};

const ActionItem = ({ onClick, children }: PropsWithChildren<ActionItemProps>) => {
  return <S.ActionItem onClick={onClick}>{children}</S.ActionItem>;
};

ActionSheet.Item = ActionItem;

export default ActionSheet;
