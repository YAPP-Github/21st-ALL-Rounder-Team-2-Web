import { Meta } from "@storybook/react";
import Page from "./page";

export default {
  title: "app/calendar",
  component: Page,
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
    layout: "fullscreen",
    nextjs: {
      navigation: {
        query: {
          year: 2023,
          month: 2,
        },
      },
    },
  },
} as Meta;

export const Template = () => <Page />;
