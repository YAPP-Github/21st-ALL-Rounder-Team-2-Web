import React from "react";
import { Story, Meta } from "@storybook/react";
import { TagList, Props } from "./TagList";

export default {
  component: TagList,
  title: "UI/TagList",
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TagList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tags: ["감정태그", "감정태그", "감정태그", "감정태그"],
};
