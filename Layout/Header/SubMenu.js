import NavLink from "next/link";
import classes from "./SubMenu.module.css";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Button from "../../UI/Button/Button";
import { useSession, signOut } from "next-auth/react";

const SubMenu = (props) => {
  const { data: session, status } =
    useSession(); /*  status returns authenticated */

  const logoutHandler = () => {
    signOut();
  };

  const [open, cycleOpen] = useCycle(false, true);
  const sideVariants = {
    open: {
      transition: {
        staggerchildren: 0.1 /* opens after 0.1 sec each */,
        staggerDirection: 1 /* 1 starts from top */,
      },
    },
    closed: {
      transition: {
        staggerchildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const menuList = (
    <motion.li>
      <NavLink
        href={`/whyCode`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        WhyCode
      </NavLink>
      <NavLink
        href={`/courses`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        Courses
      </NavLink>
      <NavLink
        href={`/aboutUs`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        AboutUs
      </NavLink>
      <NavLink
        href={`/plans`}
        activeClassName={classes.active}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        Plans
      </NavLink>
      {!session && (
        <NavLink
          href={`/login`}
          activeClassName={classes.active}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          Login
        </NavLink>
      )}
      {session && (
        <span className={classes.logout} onClick={logoutHandler}>
          Logout
        </span>
      )}

      {!session && (
        <NavLink
          href={`/newUser`}
          activeClassName={classes.active}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          NewUser
        </NavLink>
      )}

      {session && (
        <NavLink
          href={`/profile`}
          activeClassName={classes.active}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          Profile
        </NavLink>
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
                duration: 0.3,
              },
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
