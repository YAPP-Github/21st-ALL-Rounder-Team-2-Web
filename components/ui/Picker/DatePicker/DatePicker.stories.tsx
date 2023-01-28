import { Story, Meta } from '@storybook/react';
import { DatePicker, Props } from './DatePicker';

export default {
  component: DatePicker,
  title: 'UI/DatePicker',
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
