import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import Calendar from '../package/calendar';
import type { CalendarProps } from '../package/calendar';
import React from 'react';

const meta: Meta<typeof Calendar> = {
  title: '日历组件',
  component: Calendar,
  argTypes: {
    value: {
      control: 'date'
    },
  }
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    value: dayjs(),
    onChange(v) {
      console.log('v', v)
    }
  },
  render: (args: CalendarProps) => {
    if (typeof args.value === 'number') {
      return <Calendar {...args} value={ dayjs(new Date(args.value)) } />;
    }
    return <Calendar {...args} />;
  }
};