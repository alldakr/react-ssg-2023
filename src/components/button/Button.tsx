import type { PropsWithChildren } from 'react';
import './Button.css';

type Props = PropsWithChildren<{
  title?: string;
}>;

function Button({ title, children }: Props): JSX.Element {
  return (
    <button type="button" className="Button" title={title}>
      {children}
    </button>
  );
}

export default Button;
