import type { Meta, StoryFn } from "@storybook/react";
import { DatePicker, Props } from "./DatePicker";

export default {
  component: DatePicker,
  title: "UI/DatePicker",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
};
