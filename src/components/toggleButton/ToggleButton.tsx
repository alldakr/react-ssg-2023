import './ToggleButton.css';

type Props = {
  on?: boolean;
};

function ToggleButton({ on = false }: Props): JSX.Element {
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
