import React from "react";
import { Story, Meta } from '@storybook/react';
import { Icon, Props } from './Icon';

export default {
  component: Icon,
  title: 'UI/Icon',
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "UserIcon",
  color: "#000",
  size: 20,
};
