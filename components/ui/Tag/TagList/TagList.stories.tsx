import type { Meta, StoryFn } from "@storybook/react";
import { TagList, Props } from "./TagList";

export default {
  component: TagList,
  title: "UI/TagList",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <TagList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tags: ["감정태그", "감정태그", "감정태그", "감정태그"],
};
