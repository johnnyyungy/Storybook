import React from 'react';
import NewCard from './NewCard';
import { Source } from '@storybook/addon-docs';

export default {
  title: 'Components/NewCard',
  component: NewCard,
  parameters: {
    docs: {
      description: {
        component: 'This is the `NewCard` component.',
      },
      source: {
        code: `
import React from 'react';
import './NewCard.css'; 

const NewCard = ({ title, content }) => {
  return (
    <div className="new-card">
      <h2 className="new-card-title">{title}</h2>
      <p className="new-card-content">{content}</p>
    </div>
  );
};

export default NewCard;
        `,
        language: 'jsx', 
      },
    },
  },
};


const Template = (args) => <NewCard {...args} />;


export const Default = Template.bind({});
Default.args = {
  title: 'My New Card',
  content: 'This is the content of my new card.',
};


export const ShortContent = Template.bind({});
ShortContent.args = {
  title: 'Short Content Card',
  content: 'Short content.',
};


export const LongContent = Template.bind({});
LongContent.args = {
  title: 'Long Content Card',
  content:
    'This is a card with a lot of content, so you can see how the card will behave when the content is very long. This is a card with a lot of content, so you can see how the card will behave when the content is very long.',
};