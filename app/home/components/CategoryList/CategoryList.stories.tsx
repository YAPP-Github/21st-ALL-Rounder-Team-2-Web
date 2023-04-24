import type { Meta, StoryFn } from "@storybook/react";
import { CategoryList } from "./CategoryList";

export default {
  title: "Pages/Home/CategoryList",
  component: CategoryList,
} as Meta;

export const Default: StoryFn = () => <CategoryList />;
