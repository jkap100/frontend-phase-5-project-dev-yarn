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
  setIsVisible,
  setCheckOutData,
  setCardNumber,
  setCCV,
  setCCDate,
  setCCZip,
  setDueDate,
  setDueTime,
  setLocations,
  setStatus,
  setOrderType,
  isAdmin,
  setIsAdmin,
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
    setIsVisible(false);
    setCheckOutData([]);
    setCardNumber("");
    setCCV("");
    setCCDate("");
    setCCZip("");
    setDueDate("");
    setDueTime("");
    setLocations("");
    setStatus("");
    setOrderType("");
    setIsAdmin(false);
    navigate("/");

    console.log(localStorage);
  };

  const adminNav = (
    <div className="navbar-item has-dropdown is-hoverable">
      <div className="mb-2 navbar-link has-text-white">Admin</div>
      <div className="navbar-dropdown has-text-black">
        <Link to="/orders">
          <div className="navbar-item">Orders</div>
        </Link>
        <Link to="/locations">
          <div className="navbar-item">Locations</div>
        </Link>
        {/* <Link to="/orders"> */}
        {/* <div className="navbar-item">Orders</div> */}
        {/* </Link> */}
      </div>
    </div>
  );

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
            {isAdmin == "true" ? adminNav : null}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/cart">
                <div className=" mb-2 ml-2 has-text-white navbar-item navbar-item">
                  Cart
                </div>
              </Link>
              <Link to="/">
                <div className=" ml-2 mb-2 has-text-white navbar-item navbar-item">
                  Log In
                </div>
              </Link>
              <Link to="/signup">
                <div className="mb-2 ml-2 has-text-white navbar-item navbar-item">
                  Sign Up
                </div>
              </Link>

              <div
                className="mb-2 ml-2 mr-6 has-text-white navbar-item navbar-item pointer"
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
