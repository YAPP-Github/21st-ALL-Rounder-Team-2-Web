import Modal from "@/components/Modal/Modal";
import Icon from "@/components/Icon/Icon/Icon";
import { Divider } from "@/components/Divider/Divider";
import Portal from "@/components/Portal/Portal";
import Dimmed from "@/components/Dimmed/Dimmed";
import { sendMessage } from "@/libs/message/message";
import * as S from "./ImageUploadSelectModal.styles";

type Props = {
  onClose: () => void;
};

const ImageUploadSelectModal = ({ onClose }: Props) => {
  const handleCameraSelect = () => {
    sendMessage(["NAVIGATE_TO_CAMERA"]);
  };

  const handleGallerySelect = () => {
    sendMessage(["NAVIGATE_TO_GALLERY"]);
  };

  return (
    <Portal>
      <Dimmed onClick={onClose} />
      <Modal headline="무엇으로 기록할까요?" onClose={onClose}>
        <S.SelectList>
          <S.SelectItem onClick={handleCameraSelect}>
            <Icon name="CameraIcon" />
            <span>사진 촬영하기</span>
          </S.SelectItem>
          <Divider />
          <S.SelectItem onClick={handleGallerySelect}>
            <Icon name="ImageIcon" />
            <span>갤러리에서 선택하기</span>
          </S.SelectItem>
        </S.SelectList>
      </Modal>
    </Portal>
  );
};

export default ImageUploadSelectModal;
