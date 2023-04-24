import type { Meta, StoryFn } from "@storybook/react";
import { ExhibitionCardList } from "./ExhibitionCardList";

export default {
  title: "Pages/Home/ExhibitionCardList",
  component: ExhibitionCardList,
} as Meta;

export const Default: StoryFn<typeof ExhibitionCardList> = (args) => <ExhibitionCardList {...args} />;
Default.args = {
  direction: "DESC",
};
