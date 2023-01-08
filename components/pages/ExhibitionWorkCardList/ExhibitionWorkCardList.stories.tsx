import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExhibitionWorkCardList from "./ExhibitionWorkCardList";

export default {
  title: "pages/ExhibitionWorkCardList",
  component: ExhibitionWorkCardList,
} as ComponentMeta<typeof ExhibitionWorkCardList>;

const Template: ComponentStory<typeof ExhibitionWorkCardList> = (args) => (
  <ExhibitionWorkCardList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  exhibitionWorkList: new Array(10).fill(0).map((_, i) => ({
    id: i,
    imageUrl: "https://picsum.photos/300",
    title: "나의 그대여",
    artist: "김호연",
  })),
};
