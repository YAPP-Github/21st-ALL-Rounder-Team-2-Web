import { Hydrate } from "@tanstack/react-query";
import ArtworkCardListClient from "@/components/pages/ArtworkCardList/ArtworkCardList";
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
