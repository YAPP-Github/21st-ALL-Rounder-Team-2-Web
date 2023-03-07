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
  selectedDate: "2023.01.01",
  exhibitList: [
    { postId: 1, postName: "전시명 1" },
    { postId: 2, postName: "전시명 2" },
  ],
};
