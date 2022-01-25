import Link from "next/link";
import classes from "./SubMenu.module.css";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Button from "../../UI/Button/Button";
import { useSession, signOut } from "next-auth/react";

const SubMenu = (props) => {
  const {
    data: session,
    status
  } = useSession(); /*  status returns authenticated */

  const logoutHandler = () => {
    signOut();
  };

  const [open, cycleOpen] = useCycle(false, true);
  const sideVariants = {
    open: {
      transition: {
        staggerchildren: 0.1 /* opens after 0.1 sec each */,
        staggerDirection: 1 /* 1 starts from top */
      }
    },
    closed: {
      transition: {
        staggerchildren: 0.1,
        staggerDirection: -1
      }
    }
  };
  const itemVariants = {
    open: {
      opacity: 1
    },
    closed: {
      opacity: 0
    }
  };
  const subMenu = [
    { id: "Why Code", name: "WhyCode" },
    { id: "Courses", name: "Courses" },
    { id: "About Us", name: "AboutUs" },
    { id: "Plans", name: "Plans" },
    { id: "Login", name: "Login" },
    { id: "New User", name: "NewUser" },
    { id: "Profile", name: "Profile" }
  ];

  const menuList = (
    <motion.li>
      <Link
        href={`/whyCode`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        WhyCode
      </Link>
      <Link
        href={`/courses`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        Courses
      </Link>
      <Link
        href={`/aboutUs`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        AboutUs
      </Link>
      <Link
        href={`/plans`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        Plans
      </Link>
      {!session && (
        <Link
          href={`/login`}
          activeClassName={classes.active}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          Login
        </Link>
      )}
      {session && (
        <span className={classes.logout} onClick={logoutHandler}>
          Logout
        </span>
      )}

      {!session && (
        <Link
          href={`/newUser`}
          activeClassName={classes.active}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          NewUser
        </Link>
      )}

      {session && (
        <Link
          href={`/profile`}
          activeClassName={classes.active}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          Profile
        </Link>
      )}
    </motion.li>
  );

  return (
    <nav className={classes.nav}>
      {open && (
        <AnimatePresence>
          <motion.aside
            className={classes.aside}
            initial={{ width: 0 }}
            /* animate={{ width: "30vw" }} */
            exit={{
              width: 0,
              transition: {
                delay: 0.7,
                duration: 0.3
              }
            }}
          >
            {/* initial sets size on page load */}
            <motion.ul
              className={
                classes.container
              } /* initial and animate propagates  */
              variants={sideVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuList}
            </motion.ul>
            {status != "authenticated" && <span>you are not logged in</span>}
            {status === "authenticated" && (
              <span className={classes.welcome}>
                welcome {session.user.email.split("@")[0]}
              </span> /* removes extra characters from @ */
            )}
          </motion.aside>
        </AnimatePresence>
      )}
      <div className={classes.btnContainer}>
        <Button onclick={cycleOpen}>{open ? "Close" : "Open"}</Button>
      </div>
    </nav>
  );
};

export default SubMenu;
