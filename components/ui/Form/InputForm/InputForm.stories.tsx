import { Story, Meta } from "@storybook/react";
import { InputForm, Props } from "./InputForm";

export default {
  component: InputForm,
  title: "UI/InputForm",
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <InputForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "작가이름",
  children: <input placeholder="testtest" />,
};
