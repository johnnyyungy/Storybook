import React from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css'; 

/**
 * A versatile action button component with different styles and states.
 *
 * @component
 * @example
 * <ActionButton style="primary" size="medium" disabled={false}>Click Me</ActionButton>
 */
const ActionButton = ({ children, style, size, disabled, onClick }) => {
  const buttonClasses = `action-button action-button--${style} action-button--${size} ${disabled ? 'action-button--disabled' : ''}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

ActionButton.propTypes = {
  /** The content of the button. */
  children: PropTypes.node.isRequired,
  /** The visual style of the button. */
  style: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']).isRequired,
  /** The size of the button. */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /** Whether the button is disabled. */
  disabled: PropTypes.bool,
  /** Function to be executed when the button is clicked. */
  onClick: PropTypes.func,
};

export default ActionButton;