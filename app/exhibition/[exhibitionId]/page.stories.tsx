import { Meta } from "@storybook/react";
import { ExhibitInformationHeader } from "./components/ExhibitInformationHeader/ExhibitInformationHeader";
import { LinkPreviewCard } from "./components/LinkPreviewCard/LinkPreviewCard";
import { ArtworkCardList } from "./components/ArtworkCardList/ArtworkCardList";
import * as S from "./page.styles";

export default {
  title: "app/exhibit",
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
    layout: "fullscreen",
  },
} as Meta;

export const Template = () => {
  return (
    <>
      <ExhibitInformationHeader exhibitionId={3} />
      <S.Content>
        <S.ArtworkCount>5개의 작품</S.ArtworkCount>
        <S.LinkPreviewCardWrapper>
          <LinkPreviewCard
            link="artie.com"
            html='<html><head><meta property="og:image" content="https://picsum.photos/900" /><meta property="og:title" content="Example Website" /><meta property="og:description" content="" /></head></html>'
          />
        </S.LinkPreviewCardWrapper>
        <ArtworkCardList exhibitionId={3} />
      </S.Content>
    </>
  );
};
