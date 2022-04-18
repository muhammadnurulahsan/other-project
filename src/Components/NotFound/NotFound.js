import React from "react";
import "./NotFound.css";
import top from "./../../Img/top.png";
import down from "./../../Img/down.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="custom-margin">
      <img width="1519px" src={top} alt="" />
      <div className="text-center">
        <h2 className="not-found-text">Page not found</h2>
        <h1 className="number-text mt-3">404</h1>
        <h4 className="error-msg">
        <h3 className="error-msg">OOPS...!!! We're broken</h3>
          Seems like you have assembled the page incorrectly.
        </h4>
        <button
          onClick={() => navigate("/home")}
          type="button"
          className="shadow none rounded-pill btn fs-5 btn-outline-secondary my-5 py-2 px-4"
        >
          Go back to Home page
        </button>
      </div>
      <img width="1519px" src={down} alt="" />
    </div>
  );
};

export default NotFound;
