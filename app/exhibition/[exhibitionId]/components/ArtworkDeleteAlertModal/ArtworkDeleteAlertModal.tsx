import Modal from "@/components/Modal/Modal";
import * as S from "./ArtworkDeleteAlertModal.styles";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

const ArtworkDeleteAlertModal = ({ onClose, onConfirm }: Props) => {
  return (
    <Modal onClose={onClose}>
      <S.Wrapper>
        <S.ModalTitle>
          마지막 작품기록이에요
          <br />
          정말 삭제할까요?
        </S.ModalTitle>
        <S.ModalDescription>마지막 기록물을 삭제할 시 전시정보가 삭제됩니다</S.ModalDescription>
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
  );
};

export default ArtworkDeleteAlertModal;
