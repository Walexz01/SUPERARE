import { Link, useNavigate } from "react-router-dom";
import Formheading from "../../components/Formheading";
import Inputgroup from "../../components/Inputgroup";
import Acct__question from "../../components/Acct__question";
import { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext, ContextProps } from "../../context/authContext";
interface Logininput {
  email: string;
  password: string;
}
const Login = () => {
  const { setCurrentUser } = useContext<ContextProps>(AuthContext);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState<Logininput>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:300/api/login",
        userInput
      );
      setUserInput({
        email: "",
        password: "",
      });

      const data = result.data;
      setCurrentUser(data);
      const success = () => toast.success("Login successful");
      success();

      setTimeout(() => {
        navigate("/dashboard");
      }, 5000);
    } catch (err: any) {
      const error = () => toast.error(err.response?.data);
      error();
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} closeOnClick draggable />

      <Formheading
        heading="NFTs Access"
        intro="Please fill your details to access your account."
      />
      <form className="form" onSubmit={handleSubmit}>
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
          <button type="submit" className="auth__btn">
            Sign in
          </button>
          <button type="button" className="auth__btn wallet__btn">
            Sign in with Wallet
          </button>
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
