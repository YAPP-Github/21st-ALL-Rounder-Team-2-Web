import type { Meta } from "@storybook/react";
import { ExhibitionInfoHeader } from "./ExhibitionInfoHeader";

export default {
  title: "pages/ExhibitionInfoHeader",
  component: ExhibitionInfoHeader,
} as Meta;

export const Default = () => <ExhibitionInfoHeader exhibitionId={3} />;
