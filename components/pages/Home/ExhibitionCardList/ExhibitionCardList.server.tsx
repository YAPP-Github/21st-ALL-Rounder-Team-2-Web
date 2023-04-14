import { Hydrate } from "@tanstack/react-query";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";
import { useFetchExhibitionList } from "@/hooks/exhibition.server";
import { ExhibitionCardList as ExhibitionCardListClient } from "@/components/pages/Home/ExhibitionCardList/ExhibitionCardList";

type Props = {
  direction: "ASC" | "DESC";
  category?: number;
};

export const ExhibitionCardList = async ({ direction, category }: Props) => {
  await useFetchExhibitionList(direction, category);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <ExhibitionCardListClient direction={direction} category={category || undefined} />
    </Hydrate>
  );
};
