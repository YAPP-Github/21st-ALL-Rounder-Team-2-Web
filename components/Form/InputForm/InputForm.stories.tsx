import type { Meta, StoryFn } from "@storybook/react";
import TextInput from "../../Input/TextInput/TextInput";
import InputForm, { Props } from "./InputForm";

export default {
  component: InputForm,
  title: "UI/InputForm",
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <InputForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "작가이름",
  children: <TextInput placeholder="작가 이름을 적어주세요." />,
};
