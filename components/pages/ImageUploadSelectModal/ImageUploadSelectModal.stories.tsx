import type { Meta, StoryFn } from "@storybook/react";
import ImageUploadSelectModal from "./ImageUploadSelectModal";

export default {
  title: "pages/ImageUploadSelectModal",
  component: ImageUploadSelectModal,
} as Meta;

const Template: StoryFn<typeof ImageUploadSelectModal> = (args) => <ImageUploadSelectModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
