import React, { useState } from "react";
import "./Login.css";
import gImg from "../../Img/google.png";
import gitImg from "./../../Img/github.png";
import fbImg from "./../../Img/facebook.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading1, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log("Email: " + email);
    console.log("Password: " + password);
  };

  if (googleUser || gitUser || facebookUser) {
    navigate("/");
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="custom-margin">
      <div className="bg-img">
        <div className="login-form-container">
          <div className="login-form">
            <h1 className="mt-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input
                    onBlur={handleEmailBlur}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    onBlur={handlePasswordBlur}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="login-form-submit">
                Login
              </button>
            </form>
            <div className="horizontal-divider mt-4">
              <div className="line-left" />
              <p>or</p>
              <div className="line-right" />
            </div>
            <div className="d-flex justify-content-center my-3">
              <button
                onClick={() => signInWithGithub()}
                className="btn shadow rounded-pill me-4"
              >
                <img
                  height="45px"
                  width="40px"
                  src={gitImg}
                  alt="facebook-icon"
                />
              </button>
              <button
                onClick={() => signInWithGoogle()}
                className="btn shadow rounded-pill me-4"
              >
                <img src={gImg} height="45px" width="40px" alt="google-icon" />
              </button>
              <button
                onClick={() => signInWithFacebook()}
                className="btn shadow rounded-pill me-4"
              >
                <img height="45px" width="42px" src={fbImg} alt="github-icon" />
              </button>
            </div>
            <p className="redirect">
              Don't have an account?{" "}
              <Link className="ms-3" to="/register">
                Please Register!
              </Link>
            </p>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
