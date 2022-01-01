import Link from "next/link";
import classes from "./SubMenu.module.css";
const SubMenu = (props) => {
  const subMenu = [
    { id: "Why Code", name: "WhyCode" },
    { id: "Courses", name: "Courses" },
    { id: "About Us", name: "AboutUs" },
    { id: "Plans", name: "Plans" },
    { id: "Login", name: "Login" },
    { id: "Contact Us", name: "ContactUs" },
  ];

  const menuList = subMenu.map((menuItem) => {
    return (
      /* navlink helps to add active class   */
      <li key={menuItem.id}>
        {/* here we dont make http requests but we load
        components that have these menus
        data-menuitem is custom attribute*/}
        <Link href={`/${menuItem.name}`} activeClassName={classes.active}>
          {menuItem.name}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul className={classes.subMenu}>{menuList}</ul>
    </nav>
  );
};

export default SubMenu;
