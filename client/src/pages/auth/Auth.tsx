import { Link } from "react-router-dom";
import image from "../../assets/Frame 1.png";
import "./auth.css";
const Auth = () => {
  return (
    <section className="auth__section">
      <div className="auth__container">
        <div className="auth__left">
          <Link to={"/"} className="logo login_logo ">
            <h3>SUPERARE</h3>
          </Link>
          <div className="form__container">
            <div className="form__heading">
              <h2>NFTs Access</h2>
              <p>Please fill your details to access your account.</p>
            </div>
            <form className="form">
              <div className="input___group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="input___group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <span className="forgot__pass">
                <Link to={"/"}>Forgot Password?</Link>
              </span>
              <div className="auth__btn__group">
                <button className="auth__btn">Sign in</button>
                <button className="auth__btn wallet__btn">
                  Sign in with Wallet
                </button>
              </div>
              <div className="create__account">
                <span>
                  Don't have an account? <Link to={"/"}>Sign up</Link>{" "}
                </span>
              </div>
            </form>
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
