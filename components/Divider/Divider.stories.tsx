import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divider> = (args) => <Divider  />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
