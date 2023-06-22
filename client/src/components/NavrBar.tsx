import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Navlink from "./Navlink";
import { Links } from "../data/navLink";
const NavrBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className={isNavShowing ? "nav__links nav__show" : "nav__links"}>
          {Links.map(({ name, path }, index) => (
            <Navlink key={index} name={name} path={path} />
          ))}
        </ul>
        <Link to={"/"} className="logo">
          <h3>SUPERARE</h3>
        </Link>
        <div className="nav__btn">
          <Link to="auth" className="btn nav__btn__buy">
            Buy Now
          </Link>
          <div className="icon" onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <MdOutlineClose /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavrBar;
