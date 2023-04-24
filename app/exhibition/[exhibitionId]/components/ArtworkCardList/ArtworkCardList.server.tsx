import { Hydrate } from "@tanstack/react-query";
import ArtworkCardListClient from "@/app/exhibition/[exhibitionId]/components/ArtworkCardList/ArtworkCardList";
import { ArtworkCount as ArtworkCountClient } from "./ArtworkCount";
import { useFetchArtworkList } from "@/hooks/artwork.server";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";

type Props = {
  exhibitionId: number;
};

export const ArtworkCardList = async ({ exhibitionId }: Props) => {
  await useFetchArtworkList(exhibitionId);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <ArtworkCardListClient exhibitionId={exhibitionId} />
    </Hydrate>
  );
};

export const ArtworkCounter = async ({ exhibitionId }: Props) => {
  await useFetchArtworkList(exhibitionId);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <ArtworkCountClient exhibitionId={exhibitionId} />
    </Hydrate>
  );
};
