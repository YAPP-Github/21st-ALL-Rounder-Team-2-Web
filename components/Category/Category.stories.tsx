import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Category } from './Category';

export default {
  title: 'Components/Category',
  component: Category,
} as ComponentMeta<typeof Category>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'Category',
  active: false
};
