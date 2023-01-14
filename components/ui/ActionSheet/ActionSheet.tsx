import * as S from "./ActionSheet.styles";

type Props = {
  actionList: Array<{ actionName: string; onActionClick: () => void }>;
  onClose: () => void;
};

const ActionSheet = ({ actionList, onClose }: Props) => {
  return (
    <S.Wrapper>
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
  );
};

export default ActionSheet;
