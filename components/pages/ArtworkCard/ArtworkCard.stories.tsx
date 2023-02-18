import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArtworkCard from "./ArtworkCard";

export default {
  title: "pages/ArtworkCard",
  component: ArtworkCard,
} as ComponentMeta<typeof ArtworkCard>;

const Template: ComponentStory<typeof ArtworkCard> = (args) => (
  <ArtworkCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageURL: "https://picsum.photos/300",
  name: "나의 그대여",
  artist: "김호연",
};
