import Head from "next/head";
import classes from "./CoursesSummary.module.css";
import Link from "next/link";
import Card from "../../UI/card/Card";
import clientPromise from "../../lib/mongodb";

let courseList = (courses) => {
  return courses.map((courseDetails) => {
    return (
      <li key={courseDetails.id}>
        <Card className={classes.CardSelf}>
          <Link
            className={classes.Course}
            href={`/Courses/${courseDetails.id}`}
          >
            {courseDetails.courseName}
          </Link>
        </Card>
      </li>
    );
  });
};

const CoursesSummary = (props) => {
  /* console.log(props) */ return (
    <>
      <Head>
        <title>Gateway Kids Courses</title>
        <meta
          name="description"
          content="We have courses that enhance critical thinking. Courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={classes.Courses}>
        <ul>{courseList(props.courses)}</ul> {/* caling courselist above */}
      </div>
    </>
  );
};
/* get static props will be called before courses
summary on the SERVER. when it gets data it will be used
for server side rendering of html*/

export async function getStaticProps() {
  const client = await clientPromise; /* gets us the client conn */
  const db =
    client.db(); /* calls default db in env.local you can insert a db here to change default db*/
  /* const isconnected = await client.isConnected();
  console.log("isconnected", isconnected); */
  const yourCollection = db.collection("courses"); /* get collection handle */
  const courses = await yourCollection
    .find()
    .toArray(); /* find all documents  and get array*/

  return {
    props: {
      courses: courses.map((course) => ({
        courseName: course.name,
        id: course._id.toString(),
      })),
    } /*props must be obj used by courses summary */,
    revalidate: 100 /*no of SECONDS server WAITS updates the function */,
  };
}

export default CoursesSummary;
