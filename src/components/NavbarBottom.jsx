import React from "react";

function NavbarBottom({ store }) {
  return (
    <div>
      <nav
        className="navbar topBottom is-fixed-bottom is-dark"
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
            <div className="navbar-item has-text-white ml-6">{store.name}</div>

            <div className="navbar-item">{store.street}</div>
            <div className="navbar-item">{store.city}</div>
            <div className="navbar-item">{store.state}</div>
            <div className="navbar-item"></div>

            <div className="navbar-item has-dropdown is-hoverable">
              {/* <a className="navbar-link">More</a> */}

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

export default NavbarBottom;
