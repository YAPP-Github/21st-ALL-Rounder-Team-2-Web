import type { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "UI/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClose: () => {},
};
