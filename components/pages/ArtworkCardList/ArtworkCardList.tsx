import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArtworkThumbnailDto } from "@/__generate__/artwork";
import { useSetMainArtwork, useDeleteArtwork } from "@/hooks/artwork";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import Portal from "@/components/ui/Portal/Portal";
import ActionSheet from "@/components/ui/ActionSheet/ActionSheet";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import * as S from "./ArtworkCardList.styles";
import { useSelectCategory } from "@/hooks/useSelectCategory";

interface Props {
  exhibitionId: number;
  artworkList: Array<ArtworkThumbnailDto>;
}

const ArtworkCardList = ({ exhibitionId, artworkList }: Props) => {
  const router = useRouter();
  const { mutate: setMainArtworkMutate } = useSetMainArtwork(exhibitionId);
  const { mutate: deleteArtworkMutate } = useDeleteArtwork(exhibitionId);
  const { selectedIndex, selectCategoryByIndex } = useSelectCategory();

  const handleMoreBtnClick = (artworkId: number) => (e: React.MouseEvent) => {
    e.preventDefault();
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

  return (
    <S.Wrapper>
      {artworkList?.map((artwork) => (
        <li key={artwork.id}>
          <Link href={`/exhibition/${exhibitionId}/${artwork.id}`}>
            <ArtworkCard
              {...artwork}
              onMoreBtnClick={handleMoreBtnClick(artwork.id)}
            />
          </Link>
        </li>
      ))}
      {selectedIndex && (
        <Portal>
          <Dimmed />
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
            onClose={() => selectCategoryByIndex(0)}
          />
        </Portal>
      )}
    </S.Wrapper>
  );
};

export default ArtworkCardList;
