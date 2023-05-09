import type { Meta, StoryFn } from "@storybook/react";
import { ArtworkCardList } from "./ArtworkCardList";

export default {
  title: "pages/ArtworkCardList",
  component: ArtworkCardList,
} as Meta;

const Template: StoryFn<typeof ArtworkCardList> = (args) => <ArtworkCardList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  exhibitionId: 16,
};
