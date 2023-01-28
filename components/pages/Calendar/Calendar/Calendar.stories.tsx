import { Story, Meta } from '@storybook/react';
import { Calendar, Props } from './Calendar';

export default {
  component: Calendar,
  title: 'Pages/Calendar',
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Calendar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
