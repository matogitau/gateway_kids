import Head from "next/head";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/card/Card";
import classes from "./newUser.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helperFunctions/schema";
import sendDataHandler from "../../helperFunctions/sendData,js";

const NewUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submittedFormHandler = (data) => {
    /* console.log(data); */
    delete data.confirmPassword; /* remove unwanted property */
    sendDataHandler({
      api: "/api/auth/signUp",
      method: "POST",
      details: data,
      direct: "/Courses",
    });
  };

  return (
    <>
      <Head>
        <title>Gateway Kids NewUser</title>
        <meta
          name="description"
          content="Teaching kids information Technology NewUser"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Card className={classes.newUserCard}>
        <form onSubmit={handleSubmit(submittedFormHandler)}>
          <p className={classes.heading}>Login in below as new user</p>
          <Input
            htmlFor="userName"
            id="userName"
            label="userName"
            input={{ type: "text", ...register("userName") }}
          ></Input>
          <span className={classes.spanning}>{errors.userName?.message}</span>
          <Input
            htmlFor="email"
            id="email"
            label="Enter Email "
            input={{ type: "text", ...register("email") }}
          ></Input>
          <span className={classes.spanning}>{errors.email?.message}</span>
          <Input
            htmlFor="age"
            id="age"
            label="How old are you"
            input={{ type: "number", ...register("age") }}
            min="1"
            max="90"
          ></Input>
          <span className={classes.spanning}>{errors.age?.message}</span>
          <Input
            htmlFor="password"
            id="passowrd"
            label="Enter Password"
            input={{ type: "password", ...register("password") }}
          ></Input>
          <span className={classes.spanning}>{errors.password?.message}</span>
          <Input
            htmlFor="password"
            id="passowrd"
            label="Confirm Password"
            input={{
              type: "password",
              ...register("confirmPassword"),
            }}
          ></Input>
          <span className={classes.spanning}>
            {errors.confirmPassword?.message}
          </span>
          <Button type="submit">Submit</Button>
          <Link href="/Login" className={classes.link}>
            Login Existing User
          </Link>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
