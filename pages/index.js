/* requests with / nothing comes here */
import Head from "next/head";
import Button from "../UI/Button/Button";
import Card from "@/UI/card/Card";
import classes from "../styles/Main.module.css";
import Footer from "@/Layout/Footer/Footer";
import Header from "@/Layout/Header/Header";

const Main = () => {
  return (
    <>
      <Head>
        <title>Gateway Kids Programming School</title>
        <meta
          name="description"
          content="Teaching kids programming skills for next Generation "
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* first section displays marketing content */}
      <div className="App">
        <Header />
        <div className={`Main ${classes.MainMain}`}>
          {/* card has a div */}
          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              Log me in I am New to this website
            </Button>
          </Card>
          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              Log me in I have been here before
            </Button>
          </Card>
          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              messages about programming
            </Button>
          </Card>

          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              log me in am a parent
            </Button>
          </Card>
          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              Gateway junior Kids...6Yrs- 13Yrs
            </Button>
          </Card>
          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              Gateway seniors...above 13 Yrs
            </Button>
          </Card>
          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              Gateway seniors...above 13 Yrs
            </Button>
          </Card>
          <Card>
            <Button type={"submit"} className={classes.BtnShape}>
              Gateway seniors...above 13 Yrs
            </Button>
          </Card>
        </div>

        {/* this section displays links of projects */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
