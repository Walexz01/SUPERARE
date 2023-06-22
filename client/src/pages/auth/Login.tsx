import { Link } from "react-router-dom";
import Formheading from "../../components/Formheading";
import Inputgroup from "../../components/Inputgroup";
import Acct__question from "../../components/Acct__question";

const Login = () => {
  return (
    <>
      <Formheading
        heading="NFTs Access"
        intro="Please fill your details to access your account."
      />
      <form className="form">
        <Inputgroup
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <Inputgroup
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <span className="forgot__pass">
          <Link to={""}>Forgot Password?</Link>
        </span>
        <div className="auth__btn__group">
          <button className="auth__btn">Sign in</button>
          <button className="auth__btn wallet__btn">Sign in with Wallet</button>
        </div>
        <Acct__question
          question="Don't have an account?"
          action="Sign up"
          path="signup"
        />
      </form>
    </>
  );
};

export default Login;
