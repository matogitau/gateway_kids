import classes from "./Header.module.css";

import logo from "../../public/logo192By192.png";
import Hamburger from "./Hamburger";
import SubMenu from "./SubMenu";
import { useState } from "react";

const Header = () => {
  const [toggleSubMenu, setToggleSubMenu] = useState(false);

  //execute a function to show submenu
  const showSubMenuhandler = () => {
    setToggleSubMenu(!toggleSubMenu);
  };

  const subMenu = toggleSubMenu && (
    <div id="main-nav" className={classes.HeaderSubMenu}>
      <SubMenu />
    </div>
  );

  return (
    /* classname header is global in App.css */

    <div className="Header">
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>

      {subMenu}

      <div className={classes.hamburger}>
        <Hamburger onclick={showSubMenuhandler} />
      </div>
    </div>
  );
};

export default Header;
