import { useCallback } from "react";
import Link from "next/link";
import { ArtworkThumbnailDto } from "@/__generate__/artwork";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import Portal from "@/components/ui/Portal/Portal";
import ActionSheet from "@/components/ui/ActionSheet/ActionSheet";
import useOverlay from "@/hooks/useOverlay";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import * as S from "./ArtworkCardList.styles";

interface Props {
  artworkList: Array<ArtworkThumbnailDto>;
}

const ArtworkCardList = ({ artworkList }: Props) => {
  const { isShow, showOverlay, hideOverlay } = useOverlay();

  const handleMoreBtnClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    showOverlay();
  }, []);

  const handleArtworkPin = () => {};

  const handleArtworkEdit = () => {};

  const handleArtworkDelete = () => {};

  return (
    <S.Wrapper>
      {artworkList.map((artworkList) => (
        <li key={artworkList.id}>
          {/** TODO exhibition id로 교체 */}
          <Link href={`/exhibition/1/${artworkList.id}`}>
            <ArtworkCard {...artworkList} onMoreBtnClick={handleMoreBtnClick} />
          </Link>
        </li>
      ))}
      {isShow && (
        <Portal>
          <Dimmed />
          <ActionSheet
            actionList={[
              {
                actionName: "대표이미지로 선택",
                onActionClick: handleArtworkPin,
              },
              { actionName: "게시글 수정", onActionClick: handleArtworkEdit },
              { actionName: "삭제", onActionClick: handleArtworkDelete },
            ]}
            onClose={hideOverlay}
          />
        </Portal>
      )}
    </S.Wrapper>
  );
};

export default ArtworkCardList;
