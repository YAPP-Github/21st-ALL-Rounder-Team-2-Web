import type { Meta, StoryFn } from "@storybook/react";
import { Calendar, Props } from "./Calendar";

export default {
  component: Calendar,
  title: "pages/Calendar/Calendar",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <Calendar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
