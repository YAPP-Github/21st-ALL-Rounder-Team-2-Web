import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExhibitionCardList } from "./ExhibitionCardList";

export default {
  title: "Pages/Home/ExhibitionCardList",
  component: ExhibitionCardList,
} as ComponentMeta<typeof ExhibitionCardList>;

const Template: ComponentStory<typeof ExhibitionCardList> = (args) => (
  <ExhibitionCardList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fixedExhibition: {
    id: 123,
    mainImage: "https://picsum.photos/358",
    name: "목조형가구학과 졸전",
    postDate: "2022. 11. 08",
    categoryId: 1,
    categoryName: 'test'
  },
  exhibitionList: [
    {
      id: 1,
      mainImage: "https://picsum.photos/358",
      name: "전시회명어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
      postDate: "2022. 11. 08",
      categoryId: 1,
      categoryName: 'test'
    },
    {
      id: 2,
      mainImage: "https://picsum.photos/358",
      name: "전시회명어쩌구저쩌구",
      postDate: "2022. 11. 08",
      categoryId: 1,
      categoryName: 'test'
    },
    {
      id: 3,
      mainImage: "https://picsum.photos/358",
      name: "전시회명어쩌구저쩌구",
      postDate: "2022. 11. 08",
      categoryId: 1,
      categoryName: 'test'
    },
    {
      id: 4,
      mainImage: "https://picsum.photos/358",
      name: "전시회명어쩌구저쩌구",
      postDate: "2022. 11. 08",
      categoryId: 1,
      categoryName: 'test'
    },
    {
      id: 5,
      mainImage: "https://picsum.photos/358",
      name: "전시회명어쩌구저쩌구",
      postDate: "2022. 11. 08",
      categoryId: 1,
      categoryName: 'test'
    },
    {
      id: 6,
      mainImage: "https://picsum.photos/358",
      name: "전시회명어쩌구저쩌구",
      postDate: "2022. 11. 08",
      categoryId: 1,
      categoryName: 'test'
    },
  ],
};
