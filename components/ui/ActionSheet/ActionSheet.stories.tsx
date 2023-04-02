import type { Meta, StoryFn } from "@storybook/react";
import ActionSheet from "./ActionSheet";

export default {
  title: "UI/ActionSheet",
  component: ActionSheet,
} as Meta;

export const Default: StoryFn<typeof ActionSheet> = (args) => (
  <ActionSheet {...args}>
    <ActionSheet.Item>Action 1</ActionSheet.Item>
    <ActionSheet.Item>Action 2</ActionSheet.Item>
    <ActionSheet.Item>Action 3</ActionSheet.Item>
  </ActionSheet>
);
Default.args = {
  isOpen: true,
};
