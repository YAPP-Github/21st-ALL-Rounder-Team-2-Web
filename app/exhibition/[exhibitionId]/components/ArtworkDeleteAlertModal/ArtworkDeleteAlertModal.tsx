import Modal from "@/components/Modal/Modal";
import Portal from "@/components/Portal/Portal";
import Dimmed from "@/components/Dimmed/Dimmed";
import * as S from "./ArtworkDeleteAlertModal.styles";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

const ArtworkDeleteAlertModal = ({ onClose, onConfirm }: Props) => {
  return (
    <Portal>
      <Dimmed onClick={onClose} />
      <Modal onClose={onClose}>
        <S.Wrapper>
          <S.Title>
            <div>마지막 작품기록이에요</div>
            <div>정말 삭제할까요?</div>
          </S.Title>
          <S.Description>마지막 기록물을 삭제할 시 전시정보가 삭제됩니다</S.Description>
          <S.Options>
            <button type="button" onClick={onClose}>
              아니오
            </button>
            <button type="button" onClick={onConfirm}>
              예
            </button>
          </S.Options>
        </S.Wrapper>
      </Modal>
    </Portal>
  );
};

export default ArtworkDeleteAlertModal;
