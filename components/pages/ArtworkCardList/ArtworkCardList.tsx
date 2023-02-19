"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetArtworkList, useSetMainArtwork, useDeleteArtwork } from "@/hooks/artwork";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import Portal from "@/components/ui/Portal/Portal";
import ActionSheet from "@/components/ui/ActionSheet/ActionSheet";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import ArtworkDeleteAlertModal from "@/components/pages/ArtworkDeleteAlertModal/ArtworkDeleteAlertModal";
import { useSelectCategory } from "@/hooks/useSelectCategory";
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
  const { selectedIndex, selectCategoryByIndex } = useSelectCategory();
  const [isShow, setIsShow] = useState(false);
  const { isShow: isShowAlertModal, showOverlay, hideOverlay } = useOverlay();

  const handleMoreBtnClick = (artworkId: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShow(true);
    selectCategoryByIndex(artworkId);
  };

  const handleArtworkPin = () => {
    setMainArtworkMutate(selectedIndex, {
      onSuccess: () => {
        handleActionSheetClose();
      },
    });
  };

  const handleArtworkEdit = () => {
    router.push(`/exhibition/${exhibitionId}/${selectedIndex}?edit=true`);
  };

  const handleArtworkDelete = () => {
    deleteArtworkMutate(selectedIndex, {
      onSuccess: () => {
        handleActionSheetClose();
      },
    });
  };

  const handleActionSheetClose = () => {
    setIsShow(false);
    setTimeout(() => {
      selectCategoryByIndex(0);
    }, 250);
  };

  return (
    <>
      {isShowAlertModal ? (
        <Portal>
          <Dimmed onClick={hideOverlay} />
          <ArtworkDeleteAlertModal onClose={hideOverlay} onConfirm={handleArtworkDelete} />
        </Portal>
      ) : (
        <></>
      )}
      <S.Wrapper>
        {artworkList?.map((artwork) => (
          <li key={artwork.id}>
            <Link href={`/exhibition/${exhibitionId}/${artwork.id}`}>
              <ArtworkCard {...artwork} onMoreBtnClick={handleMoreBtnClick(artwork.id)} />
            </Link>
          </li>
        ))}
        {selectedIndex ? (
          <Portal>
            <Dimmed onClick={handleActionSheetClose} />
            <S.ActionSheetWrapper isShow={isShow}>
              <ActionSheet
                actionList={[
                  {
                    actionName: "대표이미지로 선택",
                    onActionClick: handleArtworkPin,
                  },
                  {
                    actionName: "게시글 수정",
                    onActionClick: handleArtworkEdit,
                  },
                  {
                    actionName: "삭제",
                    onActionClick: artworkList?.length === 1 ? showOverlay : handleArtworkDelete,
                  },
                ]}
                onClose={handleActionSheetClose}
              />
            </S.ActionSheetWrapper>
          </Portal>
        ) : (
          <></>
        )}
      </S.Wrapper>
    </>
  );
};

export default ArtworkCardList;
