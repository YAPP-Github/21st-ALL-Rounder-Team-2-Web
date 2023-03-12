import type { Meta, StoryFn } from "@storybook/react";
import { AppBar } from "./AppBar";

export default {
  title: "Pages/Home/AppBar",
  component: AppBar,
} as Meta;

const Template: StoryFn<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
