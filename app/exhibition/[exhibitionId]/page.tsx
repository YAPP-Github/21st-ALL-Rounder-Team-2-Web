import { Suspense } from "react";
import { Hydrate } from "@tanstack/react-query";
import { CustomSuspense } from "@/components/ui/CustomSuspense/CustomSuspense";
import { ExhibitInformationHeader } from "@/components/pages/ExhibitInformationHeader/ExhibitInformationHeader";
import { LinkPreviewCard, LinkPreviewCardSkeleton } from "@/components/pages/LinkPreviewCard/LinkPreviewCard";
import { ArtworkCardList } from "@/components/pages/ArtworkCardList/ArtworkCardList.server";
import { useFetchPostInfo } from "@/hooks/exhibition.server";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";
import styles from "./page.module.css";

export default async function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  const postInfo = await useFetchPostInfo(exhibitionId);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <ExhibitInformationHeader exhibitionId={exhibitionId} />
      <div className={styles.content}>
        {postInfo.attachedLink && (
          <CustomSuspense fallback={<LinkPreviewCardSkeleton />}>
            <LinkPreviewCard link={postInfo.attachedLink} />
          </CustomSuspense>
        )}
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <ArtworkCardList exhibitionId={exhibitionId} />
        </Suspense>
      </div>
    </Hydrate>
  );
}
