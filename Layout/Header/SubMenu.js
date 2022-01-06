import Link from "next/link";
import classes from "./SubMenu.module.css";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Button from "../../UI/Button/Button";
const SubMenu = (props) => {
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
  const subMenu = [
    { id: "Why Code", name: "WhyCode" },
    { id: "Courses", name: "Courses" },
    { id: "About Us", name: "AboutUs" },
    { id: "Plans", name: "Plans" },
    { id: "Login", name: "Login" },
  ];

  const menuList = subMenu.map((menuItem) => {
    return (
      <motion.li key={menuItem.id}>
        <Link
          href={`/${menuItem.name}`}
          activeClassName={classes.active}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          {menuItem.name}
        </Link>
      </motion.li>
    );
  });

  return (
    <nav className={classes.nav}>
      {open && (
        <AnimatePresence>
          <motion.aside
            className={classes.aside}
            initial={{ width: 0 }}
            animate={{ width: "30vw" }}
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
