import { bool } from 'prop-types';
import './ToggleButton.css';

ToggleButton.propTypes = {
  on: bool,
};

function ToggleButton({ on = false }) {
  return (
    <button
      type="button"
      className={`ToggleButton ${on ? 'on' : ''}`.trim()}
      aria-label={on ? '끄기' : '켜기'}
    >
      {on ? 'OFF' : 'ON'}
    </button>
  );
}

export default ToggleButton;
