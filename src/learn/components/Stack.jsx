import { bool, node, number } from 'prop-types';
import {
  component,
  vertical as layoutVertical,
  horizontal,
} from './Stack.module.css';

function Stack({ vertical = false, gap = null, children, ...restProps }) {
  const classNames = `${component} ${vertical ? layoutVertical : horizontal}`;

  return (
    <div className={classNames} style={{ gap }} {...restProps}>
      {children}
    </div>
  );
}

Stack.propTypes = {
  vertical: bool,
  gap: number,
  children: node,
};

export default Stack;
