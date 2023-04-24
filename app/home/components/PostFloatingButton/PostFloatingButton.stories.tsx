import type { Meta, StoryFn } from "@storybook/react";
import { PostFloatingButton, Props } from "./PostFloatingButton";

export default {
  component: PostFloatingButton,
  title: "Pages/Home/PostFloatingButton",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <PostFloatingButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
