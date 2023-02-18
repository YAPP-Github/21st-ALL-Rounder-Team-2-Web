import React from "react";
import { Story, Meta } from '@storybook/react';
import { PostFloatingButton, Props } from './PostFloatingButton';

export default {
  component: PostFloatingButton,
  title: 'Pages/Home/PostFloatingButton',
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <PostFloatingButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
