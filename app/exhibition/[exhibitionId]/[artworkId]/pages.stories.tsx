import { Meta, Story } from "@storybook/react";
import Page from "./page";

export default {
  title: "app/artwork",
  component: Page,
} as Meta;

export const Template: Story = () => (
  <Page
    params={{
      exhibitionId: "1",
      artworkId: "1",
    }}
  />
);
