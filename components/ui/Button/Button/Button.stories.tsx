import { Story, Meta } from "@storybook/react";
import { Button, Props } from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "전시기록 완성",
};
