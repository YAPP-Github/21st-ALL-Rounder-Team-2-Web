import type { Meta, StoryFn } from "@storybook/react";
import ArtworkDeleteAlertModal from "./ArtworkDeleteAlertModal";

export default {
  title: "pages/ArtworkDeleteAlertModal",
  component: ArtworkDeleteAlertModal,
} as Meta;

const Template: StoryFn<typeof ArtworkDeleteAlertModal> = (args) => <ArtworkDeleteAlertModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
