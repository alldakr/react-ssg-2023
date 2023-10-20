import { oneOf, element, string } from 'prop-types';
import styles from './IconButton.module.css';

function IconButton({
  mode = 'primary',
  size = 'md',
  rounded = 'none',
  iconLeft = null,
  iconRight = null,
  label = '',
  children,
  ...restProps
}) {
  let classNames = styles.component;

  classNames += ' ';
  classNames += mode.includes('primary') ? styles.primary : styles.secondary;
  classNames += ' ';
  classNames += styles[size];
  classNames += ' ';
  classNames += styles[`rounded-${rounded}`];

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

IconButton.propTypes = {
  mode: oneOf(['primary', 'secondary']),
  size: oneOf(['sm', 'md', 'lg']),
  rounded: oneOf(['none', 'sm', 'md', 'lg', 'full']),
  iconLeft: element,
  iconRight: element,
  label: string,
};

export default IconButton;
