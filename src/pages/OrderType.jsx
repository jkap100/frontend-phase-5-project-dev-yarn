import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

function OrderType({
  store,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zip,
  setZip,
}) {
  return (
    <motion.div
      className="container"
      //   className="ml-6  mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="columns">
        <div className="column mr-6">
          {/* <p clasName="bd-notification is-info">First column</p> */}
          <h3 className="subtitle has-text-white">
            Order Take Out From: - {store.name} - {store.street}, {store.city}
          </h3>
          <div className="columns is-mobile">
            <div className="column">
              <motion.div className="next" variants={nextVariants}>
                <Link to="/sauce">
                  <div className="mt-4 ml-6">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      //   onClick={startOrder}
                    >
                      Start Take Out
                    </motion.button>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="column ml-6">
          <h3 className="subtitle has-text-white">
            Order Delivery From: - {store.name} - {store.street}, {store.city}
          </h3>

          <form onSubmit="">
            <div className="is-expanded">
              <label className="label mr-3 ml-3 has-text-white">Name</label>
              <div className="field is-grouped is-grouped-multiline mb-4 mr-3 ml-3">
                <p className="control ">
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  ></input>
                </p>

                <p className="control ">
                  <input
                    className="input"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  ></input>
                </p>
              </div>

              <div className="field mr-3 ml-3">
                <label className="label has-text-white">Address</label>
                <p className="control ">
                  <input
                    className="input"
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                  ></input>
                </p>
              </div>

              <div className="field is-grouped mr-3 ml-3 is-grouped-multiline mb-4">
                <p className="control ">
                  <input
                    className="input"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  ></input>
                </p>

                <p className="control ">
                  <input
                    className="input"
                    type="text"
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                  ></input>
                </p>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                  ></input>
                </p>
              </div>

              <div className="field ml-3 mb-4">
                <p className="control">
                  <Link to="/crust">
                    <motion.button variants={buttonVariants} whileHover="hover">
                      Start Delivery
                    </motion.button>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default OrderType;
