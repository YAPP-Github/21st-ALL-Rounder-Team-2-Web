import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActionSheet from "./ActionSheet";

export default {
  title: "UI/ActionSheet",
  component: ActionSheet,
} as ComponentMeta<typeof ActionSheet>;

const Template: ComponentStory<typeof ActionSheet> = (args) => (
  <ActionSheet {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  actionList: [
    { actionName: "게시글 수정", onActionClick: () => {} },
    { actionName: "삭제", onActionClick: () => {} },
  ],
};
