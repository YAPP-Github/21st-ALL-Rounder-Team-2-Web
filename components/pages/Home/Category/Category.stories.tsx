import type { Meta, StoryFn } from "@storybook/react";
import { Category } from "./Category";

export default {
  title: "Pages/Home/Category",
  component: Category,
} as Meta;

const Template: StoryFn<typeof Category> = (args) => <Category {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Category",
  active: false,
};
