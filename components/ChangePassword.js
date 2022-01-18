import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Card from "../UI/card/Card";
import classes from "./components.module.css";

const ChangePassword = () => {
  return (
    <Card className={classes.changePassword}>
      <Input label="Enter old Password"></Input>
      <Input label="Enter New Password"></Input>
      <Input label="Confirm New Password"></Input>
      <Button>Submit</Button>
    </Card>
  );
};

export default ChangePassword;
