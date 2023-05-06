import Modal from "@/components/Modal/Modal";
import Icon from "@/components/Icon/Icon/Icon";
import { Divider } from "@/components/Divider/Divider";
import { sendMessage } from "@/libs/message/message";
import { useGetArtworkQueryData } from "@/hooks/artwork";
import * as S from "./ImageUploadSelectModal.styles";

type Props = {
  exhibitionId: number;
  onClose: () => void;
};

const ImageUploadSelectModal = ({ exhibitionId, onClose }: Props) => {
  const { getArtworkListFromQueryCache } = useGetArtworkQueryData();

  const handleCameraSelect = () => {
    sendMessage(["NAVIGATE_TO_CAMERA"]);
  };

  const handleGallerySelect = () => {
    const artworkList = getArtworkListFromQueryCache(exhibitionId);
    if (!artworkList?.totalElements) return;

    sendMessage(["NAVIGATE_TO_GALLERY", { count: artworkList.totalElements }]);
  };

  return (
    <Modal onClose={onClose}>
      <Modal.Title>무엇으로 기록할까요?</Modal.Title>
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
