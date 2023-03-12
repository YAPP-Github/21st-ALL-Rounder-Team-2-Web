import type { Meta, StoryFn } from "@storybook/react";
import ExhibitionInfoHeader from "./ExhibitionInfoHeader";

export default {
  title: "pages/ExhibitionInfoHeader",
  component: ExhibitionInfoHeader,
} as Meta;

const Template: StoryFn<typeof ExhibitionInfoHeader> = (args) => <ExhibitionInfoHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  exhibitionId: 1,
};
