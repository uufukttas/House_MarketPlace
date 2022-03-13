import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {db} from '../firebase.config'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
    formData[event.target.id] = event.target.value;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
        console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            id="name"
            type="text"
            className="nameInput"
            placeholder="Name"
            value={name}
            onChange={handleChangeInput}
          />
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
              autoComplete='true'
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

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#fff" width={34} height={34} />
            </button>
          </div>
        </form>
        {/*Google OAth */}
        <Link to="/sign_in" className="registerLink">
          Sign In
        </Link>
      </div>
    </>
  );
}

export default SignUp;
