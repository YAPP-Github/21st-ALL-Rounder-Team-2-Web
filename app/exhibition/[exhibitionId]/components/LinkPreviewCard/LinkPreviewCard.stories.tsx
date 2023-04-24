import type { Meta } from "@storybook/react";
import { LinkPreviewCardSkeleton } from ".";
import { LinkPreviewCard } from "./LinkPreviewCard";
import { IconButton } from "@/components/Button/IconButton/IconButton";
import * as S from "./LinkPreviewCard.styles";

export default {
  title: "pages/LinkPreviewCard",
  component: LinkPreviewCard,
} as Meta;

export const Default = () => <LinkPreviewCard link="artie.com" />;

export const NoImage = () => (
  <S.Wrapper>
    <S.Info>
      <S.Url>artie.com</S.Url>
      <S.Title>Example Website</S.Title>
    </S.Info>
    <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} />
  </S.Wrapper>
);

export const NoTitle = () => (
  <S.Wrapper>
    <S.Info>
      <S.Url>artie.com</S.Url>
    </S.Info>
    <IconButton iconProps={{ name: "ChevronRightIcon", size: 24 }} />
  </S.Wrapper>
);

export const Loading = () => <LinkPreviewCardSkeleton />;
