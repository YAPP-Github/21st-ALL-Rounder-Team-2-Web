import type { Meta } from "@storybook/react";
import { LinkPreviewCard, LinkPreviewCardSkeleton } from "./LinkPreviewCard";
import { IconButton } from "@/components/ui/Button/IconButton/IconButton";
import * as S from "./LinkPreviewCard.styles";

export default {
  title: "pages/LinkPreviewCard",
  component: LinkPreviewCard,
} as Meta;

export const Default = () => <LinkPreviewCard link="artie.com" />;

export const NoImage = () => (
  <S.Wrapper>
    <S.ImageSkeleton />
    <S.Info>
      <S.Url>artie.com</S.Url>
      <S.Title>Example Website</S.Title>
    </S.Info>
    <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} />
  </S.Wrapper>
);

export const NoTitle = () => (
  <S.Wrapper>
    <S.ImageSkeleton />
    <S.Info>
      <S.Url>artie.com</S.Url>
      <S.Title></S.Title>
    </S.Info>
    <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} />
  </S.Wrapper>
);

export const Loading = () => <LinkPreviewCardSkeleton />;
