import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavigationBar from "./NavigationBar";

export default {
  title: "UI/NavigationBar",
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  current: "전시 정보",
};
