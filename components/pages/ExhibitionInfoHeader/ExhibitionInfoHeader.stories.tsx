import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExhibitionInfoHeader from "./ExhibitionInfoHeader";

export default {
  title: "pages/ExhibitionInfoHeader",
  component: ExhibitionInfoHeader,
} as ComponentMeta<typeof ExhibitionInfoHeader>;

const Template: ComponentStory<typeof ExhibitionInfoHeader> = (args) => <ExhibitionInfoHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  exhibitionId: 1,
};
