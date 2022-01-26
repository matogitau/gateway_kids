import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/card/Card";
import classes from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../../helperFunctions/schema";
import sendDataHandler from "../../helperFunctions/sendData";
import { getSession } from "next-auth/react"; /* can be used on serverside */

const ChangePassword = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmitHandler = async (userInputs) => {
    sendDataHandler({
      api: "/api/auth/users/changePassword",
      method: "PATCH",
      details: userInputs,
      direct: "/profile",
    });
  };

  return (
    <Card className={classes.changePassword}>
      <Input
        input={{
          type: "password",
          ...register("oldPassword", { required: true, minLength: 8 }),
        }}
        label="Enter old Password"
      ></Input>
      <span className={classes.spanning}>{errors.oldPassword?.message}</span>
      <Input
        input={{
          type: "password",
          ...register("newPassword", { required: true, minLength: 8 }),
        }}
        label="Enter New Password"
      ></Input>
      <span className={classes.spanning}>{errors.newPassword?.message}</span>
      <Input
        input={{
          type: "password",
          ...register("newPasswordConfirm", { required: true, minLength: 8 }),
        }}
        label="Confirm New Password"
      ></Input>
      <span className={classes.spanning}>
        {errors.newPasswordConfirm?.message}
      </span>
      <div className={classes.submitCancel}>
        <Button onclick={handleSubmit(onSubmitHandler)} type="submit">
          Submit
        </Button>
        <Button onclick={props.onCancel}>Cancel</Button>
      </div>
    </Card>
  );
};

export default ChangePassword;
/* to redirect on the server side */
export async function getServerSideProps(context) {
  const session = await getSession({
    req: context.req,
  }); /* will extract session cookie */
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
