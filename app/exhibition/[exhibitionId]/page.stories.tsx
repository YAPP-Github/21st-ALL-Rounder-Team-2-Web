import { Meta } from "@storybook/react";
import { Suspense } from "react";
import { ExhibitionInfoHeader } from "@/components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { LinkPreviewCard, LinkPreviewCardSkeleton } from "@/components/pages/LinkPreviewCard/LinkPreviewCard";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import { CustomSuspense } from "@/components/ui/CustomSuspense/CustomSuspense";
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
    <ExhibitionInfoHeader exhibitionId={3} />
    <div className={styles.content}>
      <CustomSuspense fallback={<LinkPreviewCardSkeleton />}>
        <LinkPreviewCard link="artie.com" />
      </CustomSuspense>
      <ArtworkCardList exhibitionId={3} />
    </div>
  </>
);
