import Head from "next/head";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/card/Card";
import classes from "./Login.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

import sendDataHandler from "../../helperFunctions/sendData";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submittedFormHandler = async (userInputs) => {
    /* sendDataHandler({
      api: "/api/auth/signUp",
      method: "POST",
      details: userInputs,
      direct: "/Courses",
    }); */
    /*  we check if authorization token is ok here */
    console.log(userInputs);
  };

  return (
    <>
      <Head>
        <title>Gateway Kids Login</title>
        <meta
          name="description"
          content="Teaching kids information Technology Login"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Card className={classes.login}>
        <form onSubmit={handleSubmit(submittedFormHandler)}>
          <p className={classes.heading}>Login in below existing user</p>
          <Input
            htmlFor="userName"
            id="userName"
            label="userName"
            input={{
              type: "text",
              ...register("userName", { required: true, minLength: 4 }),
              required: true,
            }}
          ></Input>
          <span className={classes.spanning}>
            {errors.userName && "Enter userName at least four characters"}
          </span>

          <Input
            htmlFor="password"
            id="password"
            label="Enter Password"
            input={{
              type: "password",
              ...register("password", { required: true, minLength: 8 }),
            }} /* validation is added at register function */
          ></Input>
          <span className={classes.spanning}>
            {errors.password && "password should be at least 8 characters"}
          </span>
          <div className={classes.password}>
            <Button type="submit">Submit</Button>
            <Link href="/ForgotPassword">Forgot Password ?</Link>
          </div>
          <Link href="/NewUser" className={classes.link}>
            Create Account New User
          </Link>
        </form>
      </Card>
    </>
  );
};

export default Login;
