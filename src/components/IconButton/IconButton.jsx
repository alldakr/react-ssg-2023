import { oneOf, element, node, string } from 'prop-types';
import styles from './IconButton.module.css';

IconButton.propTypes = {
  mode: oneOf(['primary', 'secondary']),
  size: oneOf(['sm', 'md', 'lg']),
  rounded: oneOf(['none', 'sm', 'md', 'lg', 'full']),
  iconLeft: element,
  iconRight: element,
  label: string,
  children: node.isRequired,
};

function IconButton({
  mode = 'primary',
  size = 'md',
  rounded = 'none',
  iconLeft = null,
  iconRight = null,
  label = null,
  children,
  ...restProps
}) {
  const classNames = `${styles.component} ${styles[mode]} ${styles[size]} ${
    styles[`rounded-${rounded}`]
  }`;

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
