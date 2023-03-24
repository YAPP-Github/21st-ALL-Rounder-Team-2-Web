import { Meta, Story } from "@storybook/react";
import Page from "./page";

export default {
  title: "app/artwork",
  component: Page,
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = () => (
  <Page
    params={{
      exhibitionId: "1",
      artworkId: "1",
    }}
  />
);
