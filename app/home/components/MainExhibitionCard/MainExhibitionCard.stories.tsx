import type { Meta, StoryFn } from "@storybook/react";
import { MainExhibitionCard } from "./MainExhibitionCard";

export default {
  title: "Pages/Home/MainExhibitionCard",
  component: MainExhibitionCard,
} as Meta;

const Template: StoryFn<typeof MainExhibitionCard> = (args) => <MainExhibitionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mainImage: "https://picsum.photos/358",
  name: "목조형가구학과 졸전",
  postDate: "2022. 11. 08",
  isPin: false,
};
