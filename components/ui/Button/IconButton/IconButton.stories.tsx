import React from "react";
import { Story, Meta } from "@storybook/react";
import { IconButton, Props } from "./IconButton";

export default {
  component: IconButton,
  title: "UI/IconButton",
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconProps: {
    name: "UserIcon",
    color: "#000",
    size: 20,
  },
};
