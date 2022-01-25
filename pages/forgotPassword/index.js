import Head from "next/head";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/card/Card";
import classes from "./ForgotPassword.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

import sendDataHandler from "../../helperFunctions/sendData";

const ForgotPassword = () => {
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
    console.log(userInputs);
  };

  return (
    <>
      <Head>
        <title>Gateway Kids Forgot Password</title>
        <meta
          name="description"
          content="impacting knowledger that will be used tomorrow Forgot Password"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Card className={classes.forgotPassword}>
        <form onSubmit={handleSubmit(submittedFormHandler)}>
          <p className={classes.heading}>
            Enter the details below we send you link to reset your password
          </p>
          <Input
            htmlFor="email"
            id="email"
            label="Enter Email address you used we reset your password"
            input={{
              type: "email",
              ...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              }),
            }} /* validation is added at register function */
          ></Input>
          <span className={classes.spanning}>
            {errors.email && "Enter a valid email address"}
          </span>

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default ForgotPassword;
