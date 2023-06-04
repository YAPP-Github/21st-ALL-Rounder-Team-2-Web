import { Suspense } from "react";
import { Hydrate } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { ExhibitInformationHeader as ExhibitInformationHeaderClient } from "./components/ExhibitInformationHeader/ExhibitInformationHeader";
import { LinkPreviewCard, LinkPreviewCardError, LinkPreviewCardSkeleton } from "./components/LinkPreviewCard";
import { ArtworkCardList } from "./components/ArtworkCardList/ArtworkCardList";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { useFetchPostInfo } from "@/hooks/exhibition.server";
import { useFetchArtworkList } from "@/hooks/artwork.server";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";
import * as S from "./page.styles";

export default async function Page({ params }: { params: { exhibitionId: string } }) {
  const exhibitionId = Number(params.exhibitionId);
  return (
    <AuthProvider>
      <NavigationBar exhibitionId={exhibitionId} />
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <ExhibitInformationHeader exhibitionId={exhibitionId} />
      </Suspense>
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <Content exhibitionId={exhibitionId} />
      </Suspense>
    </AuthProvider>
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

async function Content({ exhibitionId }: Props) {
  const postInfoData = useFetchPostInfo(exhibitionId);
  const artworkListData = useFetchArtworkList(exhibitionId);
  const [postInfo, artworkList] = await Promise.all([postInfoData, artworkListData]);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <S.Content>
        <S.ArtworkCount>{artworkList?.totalElements}개의 작품</S.ArtworkCount>
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
        <ArtworkCardList exhibitionId={exhibitionId} />
      </S.Content>
    </Hydrate>
  );
}
