import { useCallback } from "react";
import Modal from "../../ui/Modal/Modal";
import Icon from "../../ui/Icon/Icon/Icon";
import { Divider } from "../../ui/Divider/Divider";
import { sendMessage } from "../../../libs/message/message";
import * as S from "./ImageUploadSelectModal.styles";

const ImageUploadSelectModal = () => {
  const handleCameraSelect = useCallback(() => {
    sendMessage(["NAVIGATE_TO_CAMERA"]);
  }, []);

  const handleGallerySelect = useCallback(() => {
    sendMessage(["NAVIGATE_TO_GALLERY"]);
  }, []);

  return (
    <Modal headline="무엇으로 기록할까요?">
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
