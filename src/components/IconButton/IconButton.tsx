import { ReactElement } from 'react';
import styles from './IconButton.module.css';
import { PropsWithChildren } from '@/@types/global';

type Props = {
  mode?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  label?: string;
  iconLeft?: ReactElement | null;
  iconRight?: ReactElement | null;
} & PropsWithChildren;

function IconButton({
  mode = 'primary',
  size = 'md',
  rounded = 'none',
  iconLeft = null,
  iconRight = null,
  label = '',
  children,
  ...restProps
}: Props): JSX.Element {
  const classNames: string = `${styles.component} ${styles[mode]} ${
    styles[size]
  } ${styles[`rounded-${rounded}`]}`;

  return (
    <button
      type="button"
      className={classNames}
      aria-label={label}
      title={label}
      {...restProps}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export default IconButton;
