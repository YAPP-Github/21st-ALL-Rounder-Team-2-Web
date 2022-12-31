import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions"

import { CategoryList } from './CategoryList';

export default {
  title: 'Pages/Home/CategoryList',
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CategoryList> = (args) => <CategoryList {...args} onRegister={action("onAdd")} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  items: [{ text: "cat1", active: false }, { text: "cat2", active: false }], 
};
