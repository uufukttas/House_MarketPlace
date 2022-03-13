import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
    formData[event.target.id] = event.target.value;
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form>
          <input
            id="email"
            type="email"
            className="emailInput"
            placeholder="Email"
            value={email}
            onChange={handleChangeInput}
          />
          <div className="passwordInputDiv">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              value={password}
              onChange={handleChangeInput}
            />

            <img
              src={VisibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot_password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width={34} height={34} />
            </button>
          </div>
        </form>
        {/*Google OAth */}
        <Link to="/sign_up" className="registerLink">
          Sign Up
        </Link>
      </div>
    </>
  );
}

export default SignIn;
