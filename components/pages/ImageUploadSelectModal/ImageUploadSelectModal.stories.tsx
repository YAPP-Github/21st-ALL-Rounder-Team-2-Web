import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageUploadSelectModal from "./ImageUploadSelectModal";

export default {
  title: "pages/ImageUploadSelectModal",
  component: ImageUploadSelectModal,
} as ComponentMeta<typeof ImageUploadSelectModal>;

const Template: ComponentStory<typeof ImageUploadSelectModal> = () => (
  <ImageUploadSelectModal />
);

export const Primary = Template.bind({});
Primary.args = {};
