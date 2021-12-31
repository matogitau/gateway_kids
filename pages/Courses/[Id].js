import Head from "next/head";
import classes from "./CourseDetails.module.css";
import Card from "../../UI/card/Card";
import { useRouter } from "next/router";
import Button from "../../UI/Button/Button";
import clientPromise from "../../lib/mongodb";

const CourseDetails = (props) => {
  const param = useRouter();
  const enrollHandler = async (course) => {
    /* console.log(courseName); */
    const response = await fetch("/api/enrollCourses", {
      method: "POST",
      body: JSON.stringify({ course }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      try {
        const data = await response;
        param.replace("/Courses"); /* go to courses index */
      } catch (error) {
        /* show errors using state */
        console.log("Error happened here!");
        console.error(error);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Gateway Kids {props.course.name}</title>
        <meta
          name="description"
          content={`Enroll for ${props.course.name} here`}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={classes.Course}>
        <Card>
          <p>Course</p>
          {<p>Course Id using getting staticprops : {props.course._id}</p>}
          {<p>Course Name using getting staticprops : {props.course.name}</p>}
          <Button onclick={enrollHandler.bind(this, props.course)}>
            Enroll
          </Button>
        </Card>
        {/* to be shown only if we 
      enter /courses/CourseId/id/comment */}
        {/* <Route path={`/Courses/CourseDetails/:${paramId}/Comments`}>        
       <Comments courseId={paramId}/>
     </Route> */}
      </div>
    </>
  );
};
/* to indicate all the ids that we will pregenerate their pages.
 they have to be pregenerated in advance*/
export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db(); /* get db handle */
  const yourCollection = db.collection("courses"); /* get collection handle */
  const ids = await yourCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: true /* false all items are included */,
    paths: ids.map((id) => ({ params: { Id: id._id.toString() } })),
    /* paths key is an ARRAY of objects, params key is an obj*/
  };
}

export async function getStaticProps(context) {
  const id = context.params.Id; /* gets dynamic id */
  /* use the id to connect to server and get data to use below */
  const client = await clientPromise;
  const db = client.db(); /* get db handle */
  const yourCollection = db.collection("courses"); /* get collection handle */
  const course = await yourCollection.findOne({ _id: id });

  return {
    props: {
      course,
    } /* props is a property holding an obj we recieve as props in courseDetails */,
  };
}
export default CourseDetails;
