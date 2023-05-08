import { Meta } from "@storybook/react";
import { ExhibitInformationHeader } from "./components/ExhibitInformationHeader/ExhibitInformationHeader";
import { ArtworkCount } from "./components/ArtworkCardList/ArtworkCount";
import { LinkPreviewCard } from "./components/LinkPreviewCard/LinkPreviewCard";
import ArtworkCardList from "./components/ArtworkCardList/ArtworkCardList";
import styles from "./page.module.css";

export default {
  title: "app/exhibit",
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
    layout: "fullscreen",
  },
} as Meta;

export const Template = () => (
  <>
    <ExhibitInformationHeader exhibitionId={3} />
    <div className={styles.content}>
      <ArtworkCount exhibitionId={3} />
      <div className={styles.preview}>
        <LinkPreviewCard
          link="artie.com"
          html='<html><head><meta property="og:image" content="https://picsum.photos/900" /><meta property="og:title" content="Example Website" /><meta property="og:description" content="" /></head></html>'
        />
      </div>
      <ArtworkCardList exhibitionId={3} />
    </div>
  </>
);
