import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.Btn} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;