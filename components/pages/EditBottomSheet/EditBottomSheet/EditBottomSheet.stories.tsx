import type { Meta, StoryFn } from "@storybook/react";
import { EditBottomSheet, Props } from "./EditBottomSheet";

export default {
  component: EditBottomSheet,
  title: "Pages/EditBottomSheet",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <EditBottomSheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
