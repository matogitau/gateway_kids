import Head from "next/head";
import classes from "./Plans.module.css";
import Link from "next/link";
import Card from "../../UI/card/Card";

const PLANS = ["holidayLearning", "schoolProgram", "OneonOneTuituion"];

let plansList = PLANS.map((planDetails) => {
  return (
    <li key={planDetails}>
      <Card className={classes.CardSelf}>
        <Link href={`plans/${planDetails}`}>{planDetails}</Link>
      </Card>
    </li>
  );
});

const Plans = () => {
  return (
    <>
      <Head>
        <title>Gateway Kids Plans</title>
        <meta
          name="description"
          content="Teaching kids future Technology Payment Plans"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={classes.Plans}>
        <ul>{plansList}</ul>
      </div>
    </>
  );
};

export default Plans;
