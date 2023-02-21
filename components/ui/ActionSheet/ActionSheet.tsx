import Animated from "@/components/ui/Animated/Animated";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import Portal from "@/components/ui/Portal/Portal";
import * as S from "./ActionSheet.styles";

type Props = {
  isOpen: boolean;
  actionList: Array<{
    actionName: string;
    onActionClick: (e: React.MouseEvent) => void;
  }>;
  onClose: () => void;
};

const ActionSheet = ({ isOpen, actionList, onClose }: Props) => {
  return (
    <Portal>
      <Animated isOpen={isOpen}>
        <Dimmed onClick={onClose} />
        <S.Wrapper isOpen={isOpen}>
          <div>
            <S.ActionList>
              {actionList.map(({ actionName, onActionClick }) => (
                <S.ActionItem key={actionName} onClick={onActionClick}>
                  {actionName}
                </S.ActionItem>
              ))}
            </S.ActionList>
          </div>
          <div>
            <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
          </div>
        </S.Wrapper>
      </Animated>
    </Portal>
  );
};

export default ActionSheet;
