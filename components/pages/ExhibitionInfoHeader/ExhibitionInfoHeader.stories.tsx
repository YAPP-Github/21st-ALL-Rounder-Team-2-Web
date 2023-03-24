import type { Meta, StoryFn } from "@storybook/react";
import ExhibitionInfoHeader from "./ExhibitionInfoHeader";
import { exhibitionList } from "@/mocks/data/exhibition";

export default {
  title: "pages/ExhibitionInfoHeader",
  component: ExhibitionInfoHeader,
} as Meta;

const Template: StoryFn<typeof ExhibitionInfoHeader> = (args) => <ExhibitionInfoHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  postInfo: exhibitionList[3],
};
