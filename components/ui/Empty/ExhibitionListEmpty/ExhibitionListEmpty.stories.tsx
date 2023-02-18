import React from "react";
import { Story, Meta } from '@storybook/react';
import { ExhibitionListEmpty, Props } from './ExhibitionListEmpty';

export default {
  component: ExhibitionListEmpty,
  title: 'UI/Empty/ExhibitionListEmpty',
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <ExhibitionListEmpty {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
