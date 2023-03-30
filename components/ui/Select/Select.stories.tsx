import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Icon from "@/components/ui/Icon/Icon/Icon";
import { Select } from "./Select";

export default {
  component: Select,
  title: "UI/Select",
} as Meta;

export const Default: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState("apple");

  return (
    <Select {...args} value={value} onValueChange={setValue}>
      <Select.Trigger>
        {value === "apple" ? "apple🍎" : "orange🍊"}
        <Icon name="ChevronDownIcon" />
      </Select.Trigger>
      <Select.List align="start">
        <Select.Item value="apple">apple🍎</Select.Item>
        <Select.Item value="orange">orange🍊</Select.Item>
      </Select.List>
    </Select>
  );
};
