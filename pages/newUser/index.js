import Head from "next/head";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/card/Card";
import classes from "./newUser.module.css";

const NewUser = () => {
  const submittedFormHandler = (e) => {
    e.preventDefault();
    console.log("NewUser was submitted");
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
        <form onSubmit={submittedFormHandler}>
          <p className={classes.heading}>Login in below as new user</p>
          <Input
            htmlFor="emailPhone"
            id="emailPhone"
            label="Enter Email or Phone"
            input={{ type: "text" }}
          ></Input>
          <Input
            htmlFor="password"
            id="passowrd"
            label="Enter Password"
            input={{ type: "password" }}
          ></Input>
          <Input
            htmlFor="password"
            id="passowrd"
            label="Confirm Password"
            input={{
              type: "password",
            }}
          ></Input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
