import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({
  setStore,
  setFirstName,
  setLastName,
  setStreet,
  setCity,
  setState,
  setZip,
  setCrustOrder,
  setSauceOrder,
  setMeatsOrder,
  setVeggiesOrder,
}) {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    setStore("");
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setState("");
    setZip("");
    setCrustOrder("");
    setSauceOrder("");
    setMeatsOrder("");
    setVeggiesOrder("");

    navigate("/");
    console.log(localStorage);
  };

  return (
    <div>
      <nav
        className="navbar topNav is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            ></img>
          </a> */}

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/home">
              <div className="mt-2 ml-6 has-text-white navbar-item">Home</div>
            </Link>
            <Link to="/map">
              <div className="mt-2 ml-2 has-text-white navbar-item">
                Locations
              </div>
            </Link>
            <Link to="/crust">
              <div className="mt-2 ml-2 has-text-white navbar-item navbar-item">
                Crust
              </div>
            </Link>
            <Link to="/sauce">
              <div className="mt-2 ml-2 has-text-white navbar-item navbar-item">
                Sauce
              </div>
            </Link>
            <Link to="/meats">
              <div className="mt-2 ml-2 has-text-white navbar-item navbar-item">
                Meat
              </div>
            </Link>
            <Link to="/veggies">
              <div className="mt-2 ml-2 has-text-white navbar-item navbar-item">
                Veggies
              </div>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/cart">
                <div className="mt-2 ml-2 has-text-white navbar-item navbar-item">
                  Cart
                </div>
              </Link>
              <Link to="/">
                <div className="mt-2 ml-2 has-text-white navbar-item navbar-item">
                  Log In
                </div>
              </Link>
              <Link to="/signup">
                <div className="mt-2 ml-2 has-text-white navbar-item navbar-item">
                  Sign Up
                </div>
              </Link>

              <div
                className="mt-2 ml-2 mr-6 has-text-white navbar-item navbar-item pointer"
                onClick={logOut}
              >
                Log Out
              </div>

              {/* <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* <nav className="navbar" role="navigation" aria-label="main navigation">
<div className="navbar-brand">
  <a className="navbar-item" href="https://bulma.io">
    <img
      src="https://bulma.io/images/bulma-logo.png"
      alt="Logo"
      width="112"
      height="28"
    ></img>
  </a>

  <a
    role="button"
    className="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>

<div id="navbarBasicExample" className="navbar-menu">
  <div className="navbar-center">
    <a className="navbar-item">Articles</a>
    <a className="navbar-item">Projects</a>
    <a className="navbar-item">Contact</a>
    <a className="navbar-item">About</a>
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">
        <i className="fas fa-search"></i>
        Topics
      </a>

      <div className="navbar-dropdown">
        <a className="navbar-item">About</a>
        <a className="navbar-item">Jobs</a>
        <a className="navbar-item">Contact</a>
        <hr className="navbar-divider"></hr>
        <a className="navbar-item">Report an issue</a>
      </div>
    </div>
  </div>
</div>
</nav> */
}
