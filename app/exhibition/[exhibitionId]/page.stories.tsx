import { Meta } from "@storybook/react";
import Page from "./page";

export default {
  title: "app/exhibit",
  component: Page,
} as Meta;

export const Template = () => (
  <Page
    params={{
      exhibitionId: "3",
    }}
  />
);
