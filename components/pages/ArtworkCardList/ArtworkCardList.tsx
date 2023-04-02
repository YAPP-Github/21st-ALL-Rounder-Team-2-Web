"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetArtworkList, useSetMainArtwork, useDeleteArtwork } from "@/hooks/artwork";
import ActionSheet from "@/components/ui/ActionSheet/ActionSheet";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import ArtworkDeleteAlertModal from "@/components/pages/ArtworkDeleteAlertModal/ArtworkDeleteAlertModal";
import useOverlay from "@/hooks/useOverlay";
import * as S from "./ArtworkCardList.styles";

interface Props {
  exhibitionId: number;
}

const ArtworkCardList = ({ exhibitionId }: Props) => {
  const router = useRouter();
  const { data: artworkList } = useGetArtworkList(exhibitionId);
  const { mutate: setMainArtworkMutate } = useSetMainArtwork(exhibitionId);
  const { mutate: deleteArtworkMutate } = useDeleteArtwork(exhibitionId);
  const { isOpen: isOpenActionSheet, open: openActionSheet, close: closeActionSheet } = useOverlay();
  const { isOpen: isOpenAlertModal, open: openAlertModal, close: closeAlertModal } = useOverlay();
  const [selectedArtworkId, setSelectedArtworkId] = useState(-1);

  const handleMoreBtnClick = (artworkId: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedArtworkId(artworkId);
    openActionSheet();
  };

  const handleArtworkPin = () => {
    setMainArtworkMutate(selectedArtworkId, {
      onSuccess: () => {
        handleActionSheetClose();
      },
    });
  };

  const handleArtworkEdit = () => {
    router.push(`/exhibition/${exhibitionId}/${selectedArtworkId}?edit=true`);
  };

  const handleArtworkDelete = () => {
    deleteArtworkMutate(selectedArtworkId, {
      onSuccess: () => {
        handleActionSheetClose();
      },
    });
  };

  const handleActionSheetClose = () => {
    setSelectedArtworkId(-1);
    closeActionSheet();
  };

  return (
    <>
      <S.Wrapper>
        {artworkList?.map((artwork) => (
          <li key={artwork.id}>
            <Link href={`/exhibition/${exhibitionId}/${artwork.id}`}>
              <ArtworkCard {...artwork} onMoreBtnClick={handleMoreBtnClick(artwork.id)} />
            </Link>
          </li>
        ))}
      </S.Wrapper>
      <ActionSheet isOpen={isOpenActionSheet} onClose={closeActionSheet}>
        <ActionSheet.Item onClick={handleArtworkPin}>대표 이미지로 선택</ActionSheet.Item>
        <ActionSheet.Item onClick={handleArtworkEdit}>게시글 수정</ActionSheet.Item>
        <ActionSheet.Item onClick={artworkList?.length === 1 ? openAlertModal : handleArtworkDelete}>
          삭제
        </ActionSheet.Item>
      </ActionSheet>
      {isOpenAlertModal ? <ArtworkDeleteAlertModal onClose={closeAlertModal} onConfirm={handleArtworkDelete} /> : null}
    </>
  );
};

export default ArtworkCardList;
