import { useState } from "react";
import Acct__question from "../../components/Acct__question";
import Formheading from "../../components/Formheading";
import Inputgroup from "../../components/Inputgroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Signupinput {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState<Signupinput>({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:300/api/signup",
        userInput
      );
      setUserInput({ fullname: "", username: "", email: "", password: "" });
      const data = result.data;
      const success = () => toast.success(data);

      success();
      setTimeout(() => {
        navigate("/auth");
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
        heading="Create Account"
        intro="Please fill in your details to get your account created."
      />
      <form className="form" onSubmit={handleSubmit}>
        <Inputgroup
          id="name"
          label="Fullname"
          type="text"
          placeholder="Enter your Fullname"
          value={userInput.fullname}
          setValue={(e) =>
            setUserInput({ ...userInput, fullname: e.currentTarget.value })
          }
        />
        <Inputgroup
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={userInput.username}
          setValue={(e) =>
            setUserInput({ ...userInput, username: e.currentTarget.value })
          }
        />
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
        <div className="auth__btn__group">
          <button className="auth__btn">Sign up</button>
        </div>
        <Acct__question
          question="Do you have an account?"
          action="Sign in"
          path="/auth"
        />
      </form>
    </>
  );
};

export default Signup;
