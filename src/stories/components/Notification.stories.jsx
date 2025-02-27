// src/components/Notification.stories.jsx
import React from 'react';
import Notification from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

const Template = (args) => <Notification {...args} />;

export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message.',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Be careful! Something might go wrong.',
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error occurred. Please try again.',
  type: 'error',
};