import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArtworkThumbnailDto } from "@/__generate__/artwork";
import { setMainArtwork, deleteArtwork } from "@/apis/artwork";
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
  const queryClient = useQueryClient();
  const setMainArtworkMutation = useMutation({
    mutationFn: (artworkId: number) => setMainArtwork(artworkId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postInfo", exhibitionId] });
    },
  });
  const deleteArtworkMutation = useMutation({
    mutationFn: (artworkId: number) => deleteArtwork(artworkId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["artworkList", exhibitionId],
      });
    },
  });

  const { selectedIndex, selectCategoryByIndex } = useSelectCategory();

  const handleMoreBtnClick = (artworkId: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    selectCategoryByIndex(artworkId);
  };

  const handleArtworkPin = () => {
    setMainArtworkMutation.mutate(selectedIndex);
  };

  const handleArtworkEdit = () => {
    router.push(`/exhibition/${exhibitionId}/${selectedIndex}`);
  };

  const handleArtworkDelete = () => {
    deleteArtworkMutation.mutate(selectedIndex);
  };

  return (
    <S.Wrapper>
      {artworkList.map((artwork) => (
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
