import type { Meta, StoryFn } from "@storybook/react";
import { ExhibitSelectModal } from "./ExhibitSelectModal";

export default {
  component: ExhibitSelectModal,
  title: "pages/Calendar/ExhibitSelectModal",
} as Meta;

const Template: StoryFn<typeof ExhibitSelectModal> = (args) => <ExhibitSelectModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selectedDate: new Date(),
};
