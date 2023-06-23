import { Link } from "react-router-dom";
import Formheading from "../../components/Formheading";
import Inputgroup from "../../components/Inputgroup";
import Acct__question from "../../components/Acct__question";
import { useState } from "react";
interface Logininput {
  email: string;
  password: string;
}
const Login = () => {
  const [userInput, setUserInput] = useState<Logininput>({
    email: "",
    password: "",
  });
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
          value={userInput.email}
          setValue={(e) =>
            setUserInput({ ...userInput, email: e.currentTarget.value })
          }
        />
        <Inputgroup
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={userInput.password}
          setValue={(e) =>
            setUserInput({ ...userInput, password: e.currentTarget.value })
          }
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
