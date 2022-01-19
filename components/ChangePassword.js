import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Card from "../UI/card/Card";
import classes from "./components.module.css";

const ChangePassword = () => {
  return (
    <Card className={classes.changePassword}>
      <Input input={{ type: "password" }} label="Enter old Password"></Input>
      <Input label="Enter New Password"></Input>
      <Input label="Confirm New Password"></Input>
      <div className={classes.submitCancel}>
        <Button>Submit</Button>
        <Button>Cancel</Button>
      </div>
    </Card>
  );
};

export default ChangePassword;
