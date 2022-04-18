import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button} from "react-bootstrap";
import logo from "./../../Img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-font">
      <div className="news-latter">
        <div className="container d-flex justify-content-center align-items-center flex-wrap px-md-5 px-0  text-white">
          <div className="d-flex">
            <h2 className="px-md-5 px-0 mt-3 text-center">
              Get my tips directly now! Ready to start?
            </h2>

            <div className="px-md-5 px-3 flex-grow-1 d-flex align-items-center mt-2">
              <Button variant="btn btn-outline-light text-dark py-2 fs-5 px-4">
                Make an Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container container ps-md-5 ps-0">
          <div className="row">
            <div className="footer-col col-12 col-md-3">
              <h4 className="custom-padding online">MY ACCOUNT</h4>
              <ul>
                <li>
                  <a href="#account">Account</a>
                </li>
                <li>
                  <a href="#ourshop">Payment</a>
                </li>
                <li>
                  <a href="#checkout">Checkout</a>
                </li>
                <li>
                  <a href="#addtocart">Add To Cart</a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-12 col-md-3">
              <h4 className="custom-padding Get">INFORMATION</h4>
              <ul>
                <li>
                  <a href="#aboutus">About Me</a>
                </li>
                <li>
                  <a href="#blogarticle">Blog Article</a>
                </li>
                <li>
                  <a href="#ourservices">All Services</a>
                </li>
                <li>
                  <a href="#shoppingcart">Shopping Cart</a>
                </li>
              </ul>
            </div>

            <div className="footer-col col-12 col-md-3">
              <h4 className="custom-padding online">CATEGORIES</h4>
              <ul>
                <li>
                  <a href="#dairy">Contact</a>
                </li>
                <li>
                  <a href="#package">Testimonials</a>
                </li>
                <li>
                  <a href="#health">Online Courses</a>
                </li>
                <li>
                  <a href="#beverage">Student Reviews</a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-12 col-md-3 ps-5 ps-md-0">
              <h4 className="follow">follow us</h4>
              <div className="social-links">
                <a href="#icon">
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                </a>
                <a href="#icon">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#icon">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#icon">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
              <div className="logo-text">
                <div className="pt-3 d-flex align-items-center">
                  <img
                    src={logo}
                    width="40px"
                    style={{ marginRight: "15px" }}
                    alt="logo"
                  />
                  <h4 className="mb-0">Eleanor Atwood</h4>
                </div>
                <h6 className="ms-5 ps-2">Mathematics Professor</h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-color text-color text-center p-2 fw-lighter">
        <span> Developed By Muhammad Nurul Ahsan</span>
        <div>
          <span>© 2022 Organto Company | All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
