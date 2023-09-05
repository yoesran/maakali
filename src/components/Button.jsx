import classNames from "classnames";

function Button({ children, ...rest }) {
  const classes = classNames("px-4 py-2 rounded-md", rest.className);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
