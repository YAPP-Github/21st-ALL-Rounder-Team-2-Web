import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArtworkCardList from "./ArtworkCardList";

export default {
  title: "pages/ArtworkCardList",
  component: ArtworkCardList,
} as ComponentMeta<typeof ArtworkCardList>;

const Template: ComponentStory<typeof ArtworkCardList> = (args) => <ArtworkCardList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  exhibitionId: 16,
};
