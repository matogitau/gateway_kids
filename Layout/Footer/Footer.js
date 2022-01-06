import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer">
      <Link href={`/ContactUs`} activeClassName={classes.active}>
        <span className="FooterSpan">Contact us</span>
      </Link>
    </div>
  );
};

export default Footer;
