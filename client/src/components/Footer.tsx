import { Link } from "react-router-dom";
import { Links } from "../data/navLink";
import { PP_n_TC } from "../data/footerLinnks";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section className="footer__section">
      <div className="container footer__container">
        <div className="footer__top">
          <h3 className="logo ">SUPERARE</h3>
          <ul className="footer__links">
            {Links.map(({ name, path }, index) => (
              <li className="footer__link" key={index}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
            <li className="footer__link">
              <Link to={"/"}>Buy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="year">{year} Superare. All right reserved.</div>
          <div className="PP_n_TC">
            <ul className="footer__links bottom__link">
              {PP_n_TC.map(({ name, path }, index) => (
                <li className="footer__link" key={index}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
