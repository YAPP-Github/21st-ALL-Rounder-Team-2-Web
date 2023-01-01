import { Story, Meta } from '@storybook/react';
import { EditBottomSheet, Props } from './EditBottomSheet';

export default {
  component: EditBottomSheet,
  title: 'EditBottomSheet',
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <EditBottomSheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
