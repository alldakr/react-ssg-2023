import { string, node } from 'prop-types';
import './Button.css';

Button.propTypes = {
  title: string,
  children: node.isRequired,
};

function Button({ title, children, ...restProps }) {
  return (
    <button type="button" className="Button" title={title} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
