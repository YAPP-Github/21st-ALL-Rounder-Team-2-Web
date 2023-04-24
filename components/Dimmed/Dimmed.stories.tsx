import type { Meta, StoryFn } from "@storybook/react";
import Dimmed from "./Dimmed";

export default {
  title: "UI/Dimmed",
  component: Dimmed,
} as Meta;

const Template: StoryFn<typeof Dimmed> = (args) => <Dimmed />;

export const Primary = Template.bind({});
Primary.args = {};
