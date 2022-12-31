import { Story, Meta } from "@storybook/react";
import { TextInput, Props } from "./TextInput";

export default {
  component: TextInput,
  title: "UI/TextInput",
  argTypes: {},
} as Meta<Props>;

const Template: Story<Props> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "작가 이름을 적어주세요.",
};
