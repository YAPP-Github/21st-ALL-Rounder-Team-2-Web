import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExhibitionInfoHeader from "./ExhibitionInfoHeader";

export default {
  title: "pages/ExhibitionInfoHeader",
  component: ExhibitionInfoHeader,
} as ComponentMeta<typeof ExhibitionInfoHeader>;

const Template: ComponentStory<typeof ExhibitionInfoHeader> = (args) => (
  <ExhibitionInfoHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  postInfo: {
    id: 1,
    mainImage: "https://picsum.photos/300",
    categoryId: 1,
    categoryName: "카테고리1",
    name: "YAPP 졸업전시",
    postDate: "2023-02-01",
  },
};
