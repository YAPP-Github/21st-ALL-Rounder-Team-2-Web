import type { Meta, StoryFn } from "@storybook/react";
import { Tag, Props } from "./Tag";

export default {
  component: Tag,
  title: "UI/Tag",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "감정태그",
};
