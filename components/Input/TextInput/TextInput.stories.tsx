import type { Meta, StoryFn } from "@storybook/react";
import TextInput, { Props } from "./TextInput";

export default {
  component: TextInput,
  title: "UI/TextInput",
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "작가 이름을 적어주세요.",
};
