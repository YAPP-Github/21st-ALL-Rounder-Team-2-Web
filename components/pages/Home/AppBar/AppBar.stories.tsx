import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeAppBar as AppBar } from './AppBar';

export default {
  title: 'Pages/Home/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
