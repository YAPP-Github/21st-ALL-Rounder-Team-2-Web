import { useRouter } from "next/navigation";
import { useSetMainArtwork, useDeleteArtwork } from "@/hooks/artwork";
import ActionSheet from "@/components/ui/ActionSheet/ActionSheet";
import ArtworkDeleteAlertModal from "@/components/pages/ArtworkDeleteAlertModal/ArtworkDeleteAlertModal";
import useOverlay from "@/hooks/useOverlay";
import { sendMessage } from "@/libs/message/message";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  exhibitionId: number;
  artworkId: number;
  isLastArtwork: boolean;
};

export const ArtworkEditActionSheet = ({ isOpen, onClose, exhibitionId, artworkId, isLastArtwork }: Props) => {
  const router = useRouter();
  const { mutate: setMainArtworkMutate } = useSetMainArtwork(exhibitionId);
  const { mutate: deleteArtworkMutate } = useDeleteArtwork(exhibitionId, isLastArtwork);
  const { isOpen: isOpenAlertModal, open: openAlertModal, close: closeAlertModal } = useOverlay();

  const handleArtworkPin = () => {
    setMainArtworkMutate(artworkId, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const handleArtworkEdit = () => {
    router.push(`/exhibition/${exhibitionId}/${artworkId}?edit=true`);
  };

  const handleArtworkDelete = () => {
    deleteArtworkMutate(artworkId, {
      onSuccess: () => {
        onClose();
        if (isLastArtwork) sendMessage(["NAVIGATE_TO_HOME"]);
      },
    });
  };

  return (
    <ActionSheet isOpen={isOpen} onClose={onClose}>
      <ActionSheet.Item onClick={handleArtworkPin}>대표 이미지로 선택</ActionSheet.Item>
      <ActionSheet.Item onClick={handleArtworkEdit}>게시글 수정</ActionSheet.Item>
      <ActionSheet.Item onClick={isLastArtwork ? openAlertModal : handleArtworkDelete}>삭제</ActionSheet.Item>
      {isOpenAlertModal && <ArtworkDeleteAlertModal onClose={closeAlertModal} onConfirm={handleArtworkDelete} />}
    </ActionSheet>
  );
};
