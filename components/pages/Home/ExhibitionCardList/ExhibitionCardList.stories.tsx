import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExhibitionCardList from "./ExhibitionCardList";

export default {
  title: 'Pages/Home/ExhibitionCardList',
  component: ExhibitionCardList,
} as ComponentMeta<typeof ExhibitionCardList>;

const Template: ComponentStory<typeof ExhibitionCardList> = (args) => (
  <ExhibitionCardList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fixedExhibition: {
    id: 123,
    imageUrl: "https://picsum.photos/358",
    title: "목조형가구학과 졸전",
    date: "2022. 11. 08",
  },
  exhibitionList: [
    {
      id: 1,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 5,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
    {
      id: 6,
      imageUrl: "https://picsum.photos/358",
      title: "전시회명어쩌구저쩌구",
      date: "2022. 11. 08",
    },
  ],
};
