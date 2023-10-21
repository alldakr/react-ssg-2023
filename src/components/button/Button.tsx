import { PropsWithChildren } from '@/@types/global';
import './Button.css';

type Props = {
  title?: string;
} & PropsWithChildren;

function Button({ title, children }: Props): JSX.Element {
  return (
    <button type="button" className="Button" title={title}>
      {children}
    </button>
  );
}

export default Button;
