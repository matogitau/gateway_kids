import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <label className={classes.label} htmlFor="check">
      {/* if you are to perform any action
       you have to target the checkbox  */}
      <input type="checkbox" id="check" onClick={props.onclick} />
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
    </label>
  );
};

export default Hamburger;
