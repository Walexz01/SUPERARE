import { Link } from "react-router-dom";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section className="footer__section">
      <div className="container footer__container">
        <div className="footer__top">
          <h3 className="logo ">SUPERARE</h3>
          <ul className="footer__links">
            <li className="footer__link">
              <Link to={"/"}>Roadmap</Link>
            </li>
            <li className="footer__link">
              <Link to={"/"}>Team</Link>
            </li>
            <li className="footer__link">
              <Link to={"/"}>About</Link>
            </li>
            <li className="footer__link">
              <Link to={"/"}>Wallet</Link>
            </li>
            <li className="footer__link">
              <Link to={"/"}>Buy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="year">{year} Superare. All right reserved.</div>
          <div className="PP_n_TC">
            <ul className="footer__links bottom__link">
              <li className="footer__link">
                <Link to={"/"}>Privacy Policy </Link>
              </li>
              <li className="footer__link bottom__link">
                <Link to={"/"}>Terms of Service</Link>
              </li>
              <li className="footer__link bottom__link">
                <Link to={"/"}>Cookies Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
