import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react"; /* can be used on serverside */

import classes from "./Profile.module.css";
import ChangePassword from "./changePassword";
import { useState } from "react";

const Profile = () => {
  const [changePassword, setChangePassword] = useState(false);

  const changePasswordHandler = () => {
    setChangePassword(!changePassword);
  };

  const { data: session, status } = useSession();
  const route = useRouter();

  return (
    <div className={classes.profile}>
      <nav className={classes.leftMenu}>
        <ul>
          <li>my photo </li>
          <li>Enrolled Courses</li>
          <li onClick={changePasswordHandler}>change password</li>
          <li>Enroll New Course</li>
        </ul>
      </nav>

      <div className={classes.rightDisplay}>
        {changePassword && (
          <ChangePassword onCancel={changePasswordHandler}></ChangePassword>
        )}
      </div>
      {/* show modal here */}
    </div>
  );
};
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
export default Profile;
