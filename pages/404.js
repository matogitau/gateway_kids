import Card from "../UI/card/Card";
import NavLink from "next/link";
const NotFound = () => {
  return (
    <div className="Notfound">
      <Card>
        <p>No Page Found!</p>
        <NavLink href={"/"}>Go to HomePage</NavLink>
      </Card>
    </div>
  );
};

export default NotFound;
