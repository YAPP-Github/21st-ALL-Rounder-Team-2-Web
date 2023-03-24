import Image from "next/image";
import { IconButton } from "@/components/ui/Button/IconButton/IconButton";
import * as S from "./LinkPreviewCard.styles";

type Prop = {
  url: string;
  title?: string;
  image?: string;
  onClick: () => void;
};

export const LinkPreviewCard = ({ url, image, title, onClick }: Prop) => {
  return (
    <S.Wrapper>
      {image && <Image src={image} width={62} height={62} style={{ objectFit: "cover", borderRadius: "8px" }} alt="" />}
      <S.Info>
        <S.Url>{url}</S.Url>
        <S.Title>{title}</S.Title>
      </S.Info>
      <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} onClick={onClick} />
    </S.Wrapper>
  );
};
