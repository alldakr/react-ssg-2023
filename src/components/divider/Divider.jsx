import { string } from 'prop-types';
import styles from './Divider.module.css';

Divider.propTypes = {
  size: string,
};

function Divider({ size = '20px', ...restProps }) {
  return (
    <hr
      className={styles.component}
      style={{
        '--size': size,
      }}
      {...restProps}
    />
  );
}

export default Divider;
