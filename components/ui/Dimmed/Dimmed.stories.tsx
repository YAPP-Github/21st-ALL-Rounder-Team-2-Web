import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dimmed from "./Dimmed";

export default {
  title: "UI/Dimmed",
  component: Dimmed,
} as ComponentMeta<typeof Dimmed>;

const Template: ComponentStory<typeof Dimmed> = (args) => <Dimmed />;

export const Primary = Template.bind({});
Primary.args = {};
