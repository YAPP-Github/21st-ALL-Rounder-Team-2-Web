import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ExhibitSelectModal } from "./ExhibitSelectModal";

export default {
  component: ExhibitSelectModal,
  title: "pages/Calendar/ExhibitSelectModal",
} as ComponentMeta<typeof ExhibitSelectModal>;

const Template: ComponentStory<typeof ExhibitSelectModal> = (args) => <ExhibitSelectModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selectedDate: new Date(),
};
