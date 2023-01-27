import Modal from "@/components/ui/Modal/Modal";
import Icon from "@/components/ui/Icon/Icon/Icon";
import { Divider } from "@/components/ui/Divider/Divider";
import { sendMessage } from "@/libs/message/message";
import * as S from "./ImageUploadSelectModal.styles";

type Props = {
  onClose: () => void;
};

const ImageUploadSelectModal = ({ onClose }: Props) => {
  const handleClose = () => {
    onClose();
  };

  const handleCameraSelect = () => {
    sendMessage(["NAVIGATE_TO_CAMERA"]);
  };

  const handleGallerySelect = () => {
    sendMessage(["NAVIGATE_TO_GALLERY"]);
  };

  return (
    <Modal headline="무엇으로 기록할까요?" onClose={handleClose}>
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
  );
};

export default ImageUploadSelectModal;
