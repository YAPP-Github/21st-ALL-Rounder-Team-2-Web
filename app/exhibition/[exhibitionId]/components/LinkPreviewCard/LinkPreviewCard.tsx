"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconButton } from "@/components/Button/IconButton/IconButton";
import { LinkPreviewCardSkeleton } from "./LinkPreviewCard.skeleton";
import { sendMessage } from "@/libs/message/message";
import { extractOpenGraph } from "@/utils/extractOpenGraph";
import { OgData } from "@/utils/extractOpenGraph";
import * as S from "./LinkPreviewCard.styles";

type Props = {
  link: string;
  html: string;
};

export const LinkPreviewCard = ({ link, html }: Props) => {
  const [ogData, setOgData] = useState<OgData>();
  const { title, image } = ogData ?? {};

  useEffect(() => {
    setOgData(extractOpenGraph(html));
  }, [html]);

  const handleClickLink = () => {
    sendMessage(["OPEN_NEW_WINDOW", { url: link }]);
  };

  if (!ogData) return <LinkPreviewCardSkeleton />;

  return (
    <S.Wrapper>
      {image && <Image src={image} width={62} height={62} style={{ objectFit: "cover", borderRadius: "8px" }} alt="" />}
      <S.Info>
        <S.Url>{link}</S.Url>
        {title && <S.Title>{title}</S.Title>}
      </S.Info>
      <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} onClick={handleClickLink} />
    </S.Wrapper>
  );
};
