import { Suspense } from "react";
import { Hydrate } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary/ErrorBoundary";
import { ExhibitInformationHeader } from "@/components/pages/ExhibitInformationHeader/ExhibitInformationHeader";
import { LinkPreviewCard, LinkPreviewCardError, LinkPreviewCardSkeleton } from "@/components/pages/LinkPreviewCard";
import { ArtworkCardList, ArtworkCounter } from "@/components/pages/ArtworkCardList/ArtworkCardList.server";
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
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <ArtworkCounter exhibitionId={exhibitionId} />
        </Suspense>
        <div className={styles.preview}>
          {postInfo.attachedLink && (
            <ErrorBoundary fallback={<LinkPreviewCardError link={postInfo.attachedLink} />}>
              <Suspense fallback={<LinkPreviewCardSkeleton />}>
                {/* @ts-expect-error Async Server Component */}
                <LinkPreviewCard link={postInfo.attachedLink} />
              </Suspense>
            </ErrorBoundary>
          )}
        </div>
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <ArtworkCardList exhibitionId={exhibitionId} />
        </Suspense>
      </div>
    </Hydrate>
  );
}
