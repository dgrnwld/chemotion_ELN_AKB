import PropTypes from 'prop-types';
import { useEffect } from 'react';

function KeyboardShortcuts({ onDown }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      onDown(e);
    };

    window.addEventListener('keydown', handleKeyDown, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [onDown]);

  return null; // This component renders nothing
}

KeyboardShortcuts.propTypes = {
  onDown: PropTypes.func.isRequired,
};

export default KeyboardShortcuts;
