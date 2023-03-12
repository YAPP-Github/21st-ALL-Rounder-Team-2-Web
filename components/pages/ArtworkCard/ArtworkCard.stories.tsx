import type { Meta, StoryFn } from "@storybook/react";
import ArtworkCard from "./ArtworkCard";

export default {
  title: "pages/ArtworkCard",
  component: ArtworkCard,
} as Meta;

const Template: StoryFn<typeof ArtworkCard> = (args) => <ArtworkCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imageURL: "https://picsum.photos/300",
  name: "나의 그대여",
  artist: "김호연",
};
