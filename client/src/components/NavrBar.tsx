import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
const NavrBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className={isNavShowing ? "nav__links nav__show" : "nav__links"}>
          <li className="nav__link">
            <Link to={"/"}>Roadmap</Link>
          </li>
          <li className="nav__link">
            <Link to={"/"}>Team</Link>
          </li>
          <li className="nav__link">
            <Link to={"/"}>About</Link>
          </li>
          <li className="nav__link">
            <Link to={"/"}>Wallet</Link>
          </li>
        </ul>
        <Link to={"/"} className="logo">
          <h3>SUPERARE</h3>
        </Link>
        <div className="nav__btn">
          <button className="btn nav__btn">Buy Now</button>
          <div className="icon" onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <MdOutlineClose /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavrBar;
