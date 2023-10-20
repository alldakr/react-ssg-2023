import './Button.css';

function Button(props /* { title, children } */) {
  return (
    <button type="button" className="Button" title={props.title}>
      {props.children}
    </button>
  );
}

export default Button;
