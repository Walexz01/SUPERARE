import Acct__question from "../../components/Acct__question";
import Formheading from "../../components/Formheading";
import Inputgroup from "../../components/Inputgroup";

const Signup = () => {
  return (
    <>
      <Formheading
        heading="Create Account"
        intro="Please fill in your details to get your account created."
      />
      <form className="form">
        <Inputgroup
          id="name"
          label="Fullname"
          type="text"
          placeholder="Enter your Fullname"
        />
        <Inputgroup
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
        />
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
