import type { Meta, StoryFn } from "@storybook/react";
import { SortDirectionSelect } from "./SortDirectionSelect";

export default {
  title: "UI/SortDirectionSelect",
  component: SortDirectionSelect,
} as Meta;

export const Default: StoryFn = () => <SortDirectionSelect />;
