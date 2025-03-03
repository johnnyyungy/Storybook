// ActionButton.stories.jsx
import React from 'react';
import ActionButton from './ActionButton';
import styles from './ActionItem.stories.module.css';

export default {
  title: 'Components/ActionButton',
  component: ActionButton,
  argTypes: {
  },
};

const Template = (args) => <ActionButton {...args} />;

export const AllVariations = () => (
    <div className={styles.container}> 
      {/* Primary Style */}
      <ActionButton style="primary" size="small">Primary Small</ActionButton>
      <ActionButton style="primary" size="medium">Primary Medium</ActionButton>
      <ActionButton style="primary" size="large">Primary Large</ActionButton>
  
      {/* Secondary Style */}
      <ActionButton style="secondary" size="small">Secondary Small</ActionButton>
      <ActionButton style="secondary" size="medium">Secondary Medium</ActionButton>
      <ActionButton style="secondary" size="large">Secondary Large</ActionButton>
  
      {/* Outline Style */}
      <ActionButton style="outline" size="small">Outline Small</ActionButton>
      <ActionButton style="outline" size="medium">Outline Medium</ActionButton>
      <ActionButton style="outline" size="large">Outline Large</ActionButton>
  
      {/* Danger Style */}
      <ActionButton style="danger" size="small">Danger Small</ActionButton>
      <ActionButton style="danger" size="medium">Danger Medium</ActionButton>
      <ActionButton style="danger" size="large">Danger Large</ActionButton>
  
      {/* Disabled States */}
      <ActionButton style="primary" size="medium" disabled>Disabled Primary</ActionButton>
      <ActionButton style="secondary" size="medium" disabled>Disabled Secondary</ActionButton>
      <ActionButton style="outline" size="medium" disabled>Disabled Outline</ActionButton>
      <ActionButton style="danger" size="medium" disabled>Disabled Danger</ActionButton>
    </div>
  );

AllVariations.parameters = {
  docs: {
    description: {
      story: 'This story showcases all variations of the ActionButton component, including different styles, sizes, and disabled states.',
    },
  },
};