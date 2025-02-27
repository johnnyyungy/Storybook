// src/components/Tag.stories.jsx
import React from 'react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['gray', 'blue', 'green', 'red', 'yellow'],
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Tag',
  color: 'gray',
};

export const Blue = Template.bind({});
Blue.args = {
  label: 'Blue Tag',
  color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  label: 'Green Tag',
  color: 'green',
};

export const Red = Template.bind({});
Red.args = {
  label: 'Red Tag',
  color: 'red',
};

export const Yellow = Template.bind({});
Yellow.args = {
    label: "Yellow Tag",
    color: "yellow",
}