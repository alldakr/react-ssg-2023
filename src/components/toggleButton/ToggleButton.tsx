import type { PropsWithChildren } from 'react';
import './ToggleButton.css';

type Props = PropsWithChildren<{
  on?: boolean;
}>;

function ToggleButton({ on = false, children }: Props): JSX.Element {
  return (
    <button
      type="button"
      className={`ToggleButton ${on ? 'on' : ''}`.trim()}
      aria-label={on ? '끄기' : '켜기'}
    >
      {children ? children : on ? 'OFF' : 'ON'}
    </button>
  );
}

export default ToggleButton;
