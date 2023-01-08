import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageUploadSelectModal from "./ImageUploadSelectModal";

export default {
  title: "pages/ImageUploadSelectModal",
  component: ImageUploadSelectModal,
} as ComponentMeta<typeof ImageUploadSelectModal>;

const Template: ComponentStory<typeof ImageUploadSelectModal> = (args) => (
  <ImageUploadSelectModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
