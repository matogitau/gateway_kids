import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react"; /* can be used on serverside */

const Profile = () => {
  const { data: session, status } = useSession();
  const route = useRouter();

  return (
    <div>
      <p>my photo </p>
      <p>This are my enrolled Courses</p>
      <p>change password</p>
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
        destination: "/Login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
export default Profile;
