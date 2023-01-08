import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExhibitionWorkCard from "./ExhibitionWorkCard";

export default {
  title: "pages/ExhibitionWorkCard",
  component: ExhibitionWorkCard,
} as ComponentMeta<typeof ExhibitionWorkCard>;

const Template: ComponentStory<typeof ExhibitionWorkCard> = (args) => (
  <ExhibitionWorkCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: "https://picsum.photos/300",
  title: "나의 그대여",
  artist: "김호연",
};
