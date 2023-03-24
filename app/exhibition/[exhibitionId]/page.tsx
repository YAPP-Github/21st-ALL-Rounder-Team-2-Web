"use client";

import { useMemo } from "react";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import ExhibitionInfoHeader from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { LinkPreviewCard, Skeleton } from "@/components/pages/LinkPreviewCard";
import { useGetPostInfo, useGetIndexHtmlByLink } from "@/hooks/exhibition";
import { sendMessage } from "@/libs/message/message";
import { extractOpenGraph } from "@/utils/extractOpenGraph";
import * as S from "./page.styles";

export default function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  const { data: postInfo } = useGetPostInfo(exhibitionId);
  const { data: html, isLoading } = useGetIndexHtmlByLink(postInfo?.attachedLink);
  const { title, image } = useMemo(() => extractOpenGraph(html), [html]);

  const handleClickLink = () => {
    if (!postInfo?.attachedLink) return;
    sendMessage(["OPEN_NEW_WINDOW", { url: postInfo?.attachedLink }]);
  };

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader postInfo={postInfo} />
      <S.Content>
        {postInfo?.attachedLink &&
          (isLoading ? (
            <Skeleton />
          ) : (
            <LinkPreviewCard url={postInfo?.attachedLink} title={title} image={image} onClick={handleClickLink} />
          ))}
        <ArtworkCardList exhibitionId={exhibitionId} />
      </S.Content>
    </S.Wrapper>
  );
}
