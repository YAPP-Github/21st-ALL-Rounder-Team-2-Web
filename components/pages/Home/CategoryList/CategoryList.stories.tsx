import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CategoryList } from "./CategoryList";

export default {
  title: "Pages/Home/CategoryList",
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = (args) => <CategoryList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { name: "cat1", id: 0 },
    { name: "cat2", id: 1 },
  ],
};
