import type { Meta, StoryFn } from "@storybook/react";
import { LinkPreviewCard } from "./LinkPreviewCard";
import { Skeleton } from "@/components/pages/LinkPreviewCard/Skeleton";

export default {
  title: "pages/LinkPreviewCard",
  component: LinkPreviewCard,
} as Meta;

const Template: StoryFn<typeof LinkPreviewCard> = (args) => <LinkPreviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "artie.com",
  image: "https://picsum.photos/900",
  title: "Example Website",
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...Default.args,
  image: undefined,
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  ...Default.args,
  title: undefined,
};

export const Loading: StoryFn<typeof Skeleton> = () => <Skeleton />;
