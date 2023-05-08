import { useFetchIndexHtmlByLink } from "@/hooks/exhibition.server";
import { LinkPreviewCard as LinkPreviewCardClient } from "./LinkPreviewCard";

type Props = {
  link: string;
};

export const LinkPreviewCard = async ({ link }: Props) => {
  const html = await useFetchIndexHtmlByLink(link);

  return <LinkPreviewCardClient link={link} html={html} />;
};
