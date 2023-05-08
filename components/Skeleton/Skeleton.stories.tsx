import type { Meta, StoryFn } from "@storybook/react";
import { Skeleton } from "./Skeleton";

export default {
  component: Skeleton,
  title: "UI/Skeleton",
  argTypes: {},
} as Meta;

export const Default: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;
Default.args = {
  width: "200px",
  height: "100px",
  borderRadius: "4px",
};

export const Wave = Default.bind({});
Wave.args = {
  animation: "wave",
};

export const Purse = Default.bind({});
Purse.args = {
  animation: "purse",
};
