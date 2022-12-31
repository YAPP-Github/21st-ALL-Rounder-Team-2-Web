import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExhibitionCard } from "./ExhibitionCard";

export default {
  title: "Pages/Home/ExhibitionCard",
  component: ExhibitionCard,
} as ComponentMeta<typeof ExhibitionCard>;

const Template: ComponentStory<typeof ExhibitionCard> = (args) => (
  <ExhibitionCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: "https://picsum.photos/358",
  title: "목조형가구학과 졸전",
  date: "2022. 11. 08",
};
