import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props, ReactTimepickerDropdown } from '../src';
import './story.css';

const meta: Meta = {
  title: 'Welcome',
  component: ReactTimepickerDropdown,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  return (
    <div className={'react-timepicer-dropdown-example'}>
      <ReactTimepickerDropdown {...args} />
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
