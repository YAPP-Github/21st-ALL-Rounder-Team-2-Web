import type { Meta, StoryFn } from "@storybook/react";
import { Button, Props } from "./Button";

export default {
  component: Button,
  title: "UI/Button",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "전시기록 완성",
};
