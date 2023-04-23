import { Meta } from "@storybook/react";
import { ExhibitInformationHeader } from "@/components/pages/ExhibitInformationHeader/ExhibitInformationHeader";
import { ArtworkCount } from "@/components/pages/ArtworkCardList/ArtworkCount";
import { LinkPreviewCard } from "@/components/pages/LinkPreviewCard/LinkPreviewCard";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
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
        <LinkPreviewCard link="artie.com" />
      </div>
      <ArtworkCardList exhibitionId={3} />
    </div>
  </>
);
