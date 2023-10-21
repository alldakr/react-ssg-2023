import { string, node } from 'prop-types';
import './Button.css';

Button.propTypes = {
  title: string,
  children: node.isRequired,
};

function Button({ title, children }) {
  return (
    <button type="button" className="Button" title={title}>
      {children}
    </button>
  );
}

export default Button;
