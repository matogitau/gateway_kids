import classes from "./Header.module.css";
import SubMenu from "./SubMenu";
import Image from "next/image";

const Header = () => {
  return (
    /* classname header is global in App.css */

    <div className="Header">
      <div className={classes.logo}>
        <Image
          src={"/logo192By128.png"}
          height={200}
          width={200}
          layout="responsive"
          alt="logo"
        />
      </div>
      <SubMenu />
    </div>
  );
};

export default Header;
