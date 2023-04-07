import type { Meta } from "@storybook/react";
import { ExhibitInformationHeader } from "./ExhibitInformationHeader";

export default {
  title: "pages/ExhibitInformationHeader",
  component: ExhibitInformationHeader,
} as Meta;

export const Default = () => <ExhibitInformationHeader exhibitionId={3} />;
