import type { Meta, StoryFn } from "@storybook/react";
import NavigationBar from "./NavigationBar";

export default {
  title: "UI/NavigationBar",
  component: NavigationBar,
} as Meta;

const Template: StoryFn<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  current: "전시 정보",
};
