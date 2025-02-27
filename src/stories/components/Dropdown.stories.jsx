// src/components/Dropdown.stories.jsx
import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  onSelect: (option) => console.log('Selected:', option),
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
    options: [
        {value: 'red', label: 'Red'},
        {value: 'blue', label: 'Blue'},
        {value: 'green', label: 'Green'},
    ],
    onSelect: (option) => console.log("Selected:", option),
    placeholder: "Choose a color"
}