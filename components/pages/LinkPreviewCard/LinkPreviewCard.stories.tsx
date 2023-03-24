import type { Meta, StoryFn } from "@storybook/react";
import { LinkPreviewCard } from "./LinkPreviewCard";

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
