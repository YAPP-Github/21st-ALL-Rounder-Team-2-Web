import type { Meta, StoryFn } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "UI/Select",
  component: Select,
} as Meta;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
