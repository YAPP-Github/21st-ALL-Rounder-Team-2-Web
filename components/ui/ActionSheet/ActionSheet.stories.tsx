import type { Meta, StoryFn } from "@storybook/react";
import ActionSheet from "./ActionSheet";

export default {
  title: "UI/ActionSheet",
  component: ActionSheet,
} as Meta;

const Template: StoryFn<typeof ActionSheet> = (args) => <ActionSheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  actionList: [
    { actionName: "게시글 수정", onActionClick: () => {} },
    { actionName: "삭제", onActionClick: () => {} },
  ],
};
