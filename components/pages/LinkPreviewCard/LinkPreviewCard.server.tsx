import { useFetchIndexHtmlByLink } from "@/hooks/exhibition.server";
import { LinkPreviewCard as LinkPreviewCardClient } from "@/components/pages/LinkPreviewCard/LinkPreviewCard";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";
import { Hydrate } from "@tanstack/react-query";

type Props = {
  link: string;
};

export const LinkPreviewCard = async ({ link }: Props) => {
  await useFetchIndexHtmlByLink(link);
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <LinkPreviewCardClient link={link} />
    </Hydrate>
  );
};
