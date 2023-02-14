import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArtworkCardList from "./ArtworkCardList";

export default {
  title: "pages/ArtworkCardList",
  component: ArtworkCardList,
} as ComponentMeta<typeof ArtworkCardList>;

const Template: ComponentStory<typeof ArtworkCardList> = (args) => (
  <ArtworkCardList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  artworkList: new Array(10).fill(0).map((_, i) => ({
    id: i,
    imageURL: "https://picsum.photos/300",
    name: "나의 그대여",
    artist: "김호연",
  })),
};
