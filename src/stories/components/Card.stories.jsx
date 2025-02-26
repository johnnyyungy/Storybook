// src/components/Card.stories.jsx
import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My Card',
  content: 'This is the content of my card.',
};

export const ShortContent = Template.bind({});
ShortContent.args = {
    title: "Short Card",
    content: "short content"
}

export const LongContent = Template.bind({});
LongContent.args = {
    title: "Long Card",
    content: "This is a card with a lot of content, so you can see how the card will behave when the content is very long. This is a card with a lot of content, so you can see how the card will behave when the content is very long. This is a card with a lot of content, so you can see how the card will behave when the content is very long."
}