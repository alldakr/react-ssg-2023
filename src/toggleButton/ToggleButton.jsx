import './ToggleButton.css';

function ToggleButton({ on = false }) {
  return (
    <button type="button" aria-label={on ? '끄기' : '켜기'}>
      {on ? 'OFF' : 'ON'}
    </button>
  );
}

export default ToggleButton;
