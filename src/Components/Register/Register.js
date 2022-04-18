import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
    console.log("User created", user);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password !== "" && email !== "") {
    //   setError("password and email is required");
    //   return;
    // } else if (password.length < 6) {
    //   setError("Password must be at least 6 characters");
    //   return;
    // } else {
    //   setError("");
    //   console.log("Email: " + email);
    //   console.log("Password: " + password);
    // }
    createUserWithEmailAndPassword(email, password, name);
  };

  return (
    <div className="custom-margin">
      <div className="register-form-container">
        <div className="register-form">
          <h1 className="mt-4">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper">
                <input
                  onBlur={handleNameBlur}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
            </div>
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
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <button type="submit" className="register-form-submit">
              Register
            </button>
          </form>
          <div className="horizontal-divider mt-4">
            <div className="line-left" />
            <p>or</p>
            <div className="line-right" />
          </div>
          <p className="redirect">
            Already have an account?
            <Link className="ms-3" to="/login">
              Please Login!
            </Link>
          </p>
          <div className=""></div>
        </div>
        <div className="register-bg-img"></div>
      </div>
    </div>
  );
};

export default Register;
