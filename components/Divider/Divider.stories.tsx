import type { Meta, StoryFn } from "@storybook/react";
import { Divider } from "./Divider";

export default {
  title: "UI/Divider",
  component: Divider,
} as Meta;

const Template: StoryFn<typeof Divider> = (args) => <Divider />;

export const Primary = Template.bind({});
Primary.args = {};
