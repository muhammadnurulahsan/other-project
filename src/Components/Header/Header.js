import {
  faArrowCircleRight,
  faPhoneAlt,
  faSearch,
  faShoppingCart,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../../Img/logo.png";
// import toggle from "./../../Img/toggle.svg";
import Payment from "./../../Img/icon-cards-white.png";
import check from "./../../Img/icon-check-white.png";
import avatar from "./../../Img/avatar.jpg";
import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  Navbar,
} from "react-bootstrap";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="fixed-top">
      <div className="header-text fw-light text-white top-font">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 cursor">
                <img
                  className="mb-1"
                  width="25px"
                  height="25px"
                  src={Payment}
                  alt=""
                />{" "}
                Payment Options
              </p>
            </div>
            <div>
              <p className="mb-0 ms-5 cursor">
                <img
                  className="mb-2"
                  width="20px"
                  height="20px"
                  src={check}
                  alt=""
                />{" "}
                Terms Conditions
              </p>
            </div>
            <div className="ms-5">
              <div className="d-flex">
                <div>
                  <p className="mb-0 me-3 cursor">BN</p>
                </div>
                <div>
                  <p className="mb-0 cursor">US</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex px- text-white">
              <div className="d-flex align-items-center">
                <p className="mb-0 pe-3 cursor">
                  <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> Book Now: 800
                  852 45 67
                </p>
              </div>

              {user ? (
                <div className="px-2 d-flex align-items-center custom-color mx-4">
                  <div>
                    <>
                      {!user?.photoURL ? (
                        <img
                          width="40px"
                          height="40px"
                          className="me-2 rounded-circle overflow-hidden"
                          src={avatar}
                          alt=""
                        />
                      ) : (
                        <img
                          width="40px"
                          height="40px"
                          className="me-2 rounded-circle overflow-hidden"
                          src={user.photoURL}
                          alt=""
                        />
                      )}
                    </>
                  </div>
                  <div className="login-text">
                    <h6 className="fw-light">{user.displayName}</h6>
                  </div>
                </div>
              ) : (
                <div className="px-2 d-flex align-items-center custom-color mx-4 ">
                  <div>
                    <img
                      width="40px"
                      height="40px"
                      className="me-2 rounded-circle overflow-hidden"
                      src={avatar}
                      alt=""
                    />
                  </div>

                  <div className="login-text">
                    <small className="fw-lighter ">My Account</small> <br />
                    <Link as={Link} to="/login">
                      <small className="fw-lighter cursor text-light">
                        LOG IN{" "}
                      </small>
                    </Link>
                  </div>
                </div>
              )}

              {!user && (
                <Link as={Link} to="/register">
                  <h6 className="px-3 cursor custom-color text-light py-3 mb-0 fw-light mx-4">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faArrowCircleRight}
                      size="lg"
                    />
                    Register
                  </h6>
                </Link>
              )}

              {user && (
                <h6
                  onClick={handleSignOut}
                  className="px-3 cursor custom-color py-3 mb-0 fw-light mx-4"
                >
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faSignInAlt}
                    size="lg"
                  />
                  LOG OUT
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Navbar className="p-1 nav-color " expand="lg">
          <Container fluid>
            <Navbar.Brand className="text-dark d-flex cursor">
              <div className="ps-5 d-flex align-items-center ms-3">
                <img
                  src={logo}
                  width="50px"
                  style={{ marginRight: "15px" }}
                  alt="logo"
                />
                <span className="fs-4">Eleanor Atwood</span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="custom-nav mx-auto">
                <NavLink className="text-dark custom-navlink" to="/home">
                  Home
                </NavLink>
                <span className="text-muted p-3 fw-light">|</span>
                <NavLink
                  className="text-dark m-2 custom-navlink"
                  to="/services"
                >
                  Services
                </NavLink>
                <span className="text-muted p-3 fw-light">|</span>
                <NavLink className="text-dark m-2 custom-navlink" to="/blogs">
                  Blogs
                </NavLink>
                <span className="text-muted p-3 fw-light">|</span>
                <NavLink className="text-dark m-2 custom-navlink" to="/aboutme">
                  About Me
                </NavLink>
                <span className="text-muted p-3 fw-light">|</span>
                <NavLink className="text-dark m-2 custom-navlink" to="/contact">
                  Contact
                </NavLink>
              </div>

              <div className="me-5 pe-5 cursor">
                <FontAwesomeIcon className="ms-3" icon={faLinkedin} size="lg" />
                <FontAwesomeIcon className="ms-3" icon={faTwitter} size="lg" />
                <FontAwesomeIcon className="ms-3" icon={faFacebook} size="lg" />
                <FontAwesomeIcon
                  className="ms-3"
                  icon={faInstagram}
                  size="lg"
                />
                <FontAwesomeIcon className="ms-3" icon={faSearch} size="lg" />
                <FontAwesomeIcon
                  className="ms-3"
                  icon={faShoppingCart}
                  size="lg"
                />
              </div>

              {user && (
                <div className="me-3 pe-5">
                  <Dropdown as={ButtonGroup}>
                    <Button variant="outline-info  py-2 px-1 fs-6">
                      <Link
                        className="dropdown text-dark py-2 px-3 fs-6"
                        to="/mybookings"
                      >
                        My Bookings
                      </Link>
                    </Button>
                    <Dropdown.Toggle split variant="outline-info" />

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/addyourpackage">
                        Add Your Package
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/manageallbookings">
                        Manage All Bookings
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
