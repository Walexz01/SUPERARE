import { Link } from "react-router-dom";
import { link } from "../data/navLink";
const Navlink = ({ name, path }: link) => {
  return (
    <li className="nav__link">
      <Link to={path}>{name}</Link>
    </li>
  );
};

export default Navlink;
