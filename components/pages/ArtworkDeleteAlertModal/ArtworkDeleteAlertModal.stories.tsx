import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArtworkDeleteAlertModal from "./ArtworkDeleteAlertModal";

export default {
  title: "pages/ArtworkDeleteAlertModal",
  component: ArtworkDeleteAlertModal,
} as ComponentMeta<typeof ArtworkDeleteAlertModal>;

const Template: ComponentStory<typeof ArtworkDeleteAlertModal> = (args) => <ArtworkDeleteAlertModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
