import type { Meta, StoryFn } from "@storybook/react";
import { IconButton, Props } from "./IconButton";

export default {
  component: IconButton,
  title: "UI/IconButton",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconProps: {
    name: "UserIcon",
    color: "#000",
    size: 20,
  },
};
