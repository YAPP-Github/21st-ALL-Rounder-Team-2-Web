import { Suspense } from "react";
import { Hydrate } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { ExhibitInformationHeader as ExhibitInformationHeaderClient } from "./components/ExhibitInformationHeader/ExhibitInformationHeader";
import { LinkPreviewCard, LinkPreviewCardError, LinkPreviewCardSkeleton } from "./components/LinkPreviewCard";
import { ArtworkCardList, ArtworkCounter } from "./components/ArtworkCardList/ArtworkCardList.server";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { useFetchPostInfo } from "@/hooks/exhibition.server";
import { useFetchArtworkList } from "@/hooks/artwork.server";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";
import * as S from "./page.styles";

export default async function PageWrapper({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  return (
    <>
      <NavigationBar exhibitionId={exhibitionId} />
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <ExhibitInformationHeader exhibitionId={exhibitionId} />
      </Suspense>
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <PageContent exhibitionId={exhibitionId} />
      </Suspense>
    </>
  );
}

type Props = {
  exhibitionId: number;
};

async function ExhibitInformationHeader({ exhibitionId }: Props) {
  await useFetchPostInfo(exhibitionId);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <ExhibitInformationHeaderClient exhibitionId={exhibitionId} />
    </Hydrate>
  );
}

async function PageContent({ exhibitionId }: Props) {
  const postInfoData = useFetchPostInfo(exhibitionId);
  const artworkListData = useFetchArtworkList(exhibitionId);
  const [postInfo] = await Promise.all([postInfoData, artworkListData]);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <S.Content>
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <ArtworkCounter exhibitionId={exhibitionId} />
        </Suspense>
        <S.LinkPreviewCardWrapper>
          {postInfo.attachedLink && (
            <ErrorBoundary fallback={<LinkPreviewCardError link={postInfo.attachedLink} />}>
              <Suspense fallback={<LinkPreviewCardSkeleton />}>
                {/* @ts-expect-error Async Server Component */}
                <LinkPreviewCard link={postInfo.attachedLink} />
              </Suspense>
            </ErrorBoundary>
          )}
        </S.LinkPreviewCardWrapper>
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <ArtworkCardList exhibitionId={exhibitionId} />
        </Suspense>
      </S.Content>
    </Hydrate>
  );
}
