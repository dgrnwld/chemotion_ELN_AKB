import PropTypes from 'prop-types';
import { useEffect } from 'react';

function KeyboardShortcuts({ onDown }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        onDown();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component renders nothing
}

KeyboardShortcuts.propTypes = {
  onDown: PropTypes.func.isRequired,
};

export default KeyboardShortcuts;
