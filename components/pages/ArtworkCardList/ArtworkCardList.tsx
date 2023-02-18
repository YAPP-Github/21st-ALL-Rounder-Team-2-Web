"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetArtworkList, useSetMainArtwork, useDeleteArtwork } from "@/hooks/artwork";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import Portal from "@/components/ui/Portal/Portal";
import ActionSheet from "@/components/ui/ActionSheet/ActionSheet";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import * as S from "./ArtworkCardList.styles";
import { useSelectCategory } from "@/hooks/useSelectCategory";

interface Props {
  exhibitionId: number;
}

const ArtworkCardList = ({ exhibitionId }: Props) => {
  const router = useRouter();
  const { mutate: setMainArtworkMutate } = useSetMainArtwork(exhibitionId);
  const { mutate: deleteArtworkMutate } = useDeleteArtwork(exhibitionId);
  const { selectedIndex, selectCategoryByIndex } = useSelectCategory();
  const [isShow, setIsShow] = useState(false);

  const { data: artworkList } = useGetArtworkList(exhibitionId);

  const handleMoreBtnClick = (artworkId: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShow(true);
    selectCategoryByIndex(artworkId);
  };

  const handleArtworkPin = () => {
    setMainArtworkMutate(selectedIndex);
  };

  const handleArtworkEdit = () => {
    router.push(`/exhibition/${exhibitionId}/${selectedIndex}?edit=true`);
  };

  const handleArtworkDelete = () => {
    deleteArtworkMutate(selectedIndex);
  };

  const handleActionSheetClose = () => {
    setIsShow(false);
    setTimeout(() => {
      selectCategoryByIndex(0);
    }, 250);
  };

  return (
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
                  onActionClick: handleArtworkDelete,
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
  );
};

export default ArtworkCardList;
