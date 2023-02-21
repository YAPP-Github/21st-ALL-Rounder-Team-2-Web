import Modal from "@/components/ui/Modal/Modal";
import Icon from "@/components/ui/Icon/Icon/Icon";
import { Divider } from "@/components/ui/Divider/Divider";
import Portal from "@/components/ui/Portal/Portal";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
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
