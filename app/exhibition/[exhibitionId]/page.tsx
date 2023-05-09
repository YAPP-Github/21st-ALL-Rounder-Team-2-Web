import { Suspense } from "react";
import { Hydrate } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { ExhibitInformationHeader } from "./components/ExhibitInformationHeader/ExhibitInformationHeader";
import { LinkPreviewCard, LinkPreviewCardError, LinkPreviewCardSkeleton } from "./components/LinkPreviewCard";
import { ArtworkCardList, ArtworkCounter } from "./components/ArtworkCardList/ArtworkCardList.server";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { useFetchPostInfo } from "@/hooks/exhibition.server";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";
import styles from "./page.module.css";

export default async function PageWrapper({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  return (
    <>
      <NavigationBar exhibitionId={exhibitionId} />
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <Page exhibitionId={exhibitionId} />
      </Suspense>
    </>
  );
}

type Props = {
  exhibitionId: number;
};

async function Page({ exhibitionId }: Props) {
  const postInfo = await useFetchPostInfo(exhibitionId);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <NavigationBar exhibitionId={exhibitionId} />
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
