import { Link, Outlet } from "react-router-dom";
import image from "../assets/Frame 1.png";
import "../pages/auth/auth.css";
const Auth = () => {
  return (
    <section className="auth__section">
      <div className="auth__container">
        <div className="auth__left">
          <Link to={"/"} className="logo login_logo ">
            <h3>SUPERARE</h3>
          </Link>
          <div className="form__container">
            <Outlet />
          </div>
        </div>
        <div className="auth__right">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Auth;
