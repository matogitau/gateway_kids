import classes from "./Input.module.css";
/* we will receive an object called input that has
key value pairs it will spread the key value pair as 
attributes and values */
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props.input}
        className={classes.input}
        onChange={props.onchange}
      ></input>
    </div>
  );
};

export default Input;
