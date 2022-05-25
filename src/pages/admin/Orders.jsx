import React from "react";
import { motion } from "framer-motion";

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

const handleSelect = (e) => {
  e.preventDefault();
  console.log("select");
};

function Orders({
  locations,
  storeLocation,
  setStoreLocation,
  status,
  setStatus,
  orderType,
  setOrderType,
}) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          {/* <p className="bd-notification is-info">First column</p> */}
          <form>
            <div className="field is-grouped">
              <label className="is-vcentered mr-2">Location</label>
              <p className="control">
                <select
                  className="input"
                  type="text"
                  name="location"
                  value={storeLocation}
                  onChange={(e) => setStoreLocation(e.target.value)}
                >
                  <option>-</option>
                  {locations.map((l) => (
                    <option>{l.name}</option>
                  ))}
                </select>
              </p>
              <label className="is-vcentered ml-4 mr-2">Status</label>
              <p className="control">
                <select
                  className="input"
                  type="text"
                  name="location"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>-</option>
                  <option>Cart</option>
                  <option>Ordered</option>
                  <option>Filled</option>
                </select>
              </p>
              <label className="is-vcentered ml-4 mr-2">Order Type</label>
              <p className="control">
                <select
                  className="input"
                  type="text"
                  name="location"
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                >
                  <option>-</option>
                  <option>Take Out</option>
                  <option>Delivery</option>
                </select>
              </p>
              <p>
                <motion.button
                  className="ml-4"
                  variants={buttonVariants}
                  whileHover="hover"
                  onClick={handleSelect}
                >
                  Select
                </motion.button>
              </p>
            </div>
          </form>
          <div className="columns is-mobile">
            <div className="column">
              <p className="bd-notification is-info">
                First nested column First nested column First nested column
                First nested column First nested column First nested column
                First nested column First nested column
              </p>
            </div>
            {/* <div class="column">
              <p class="bd-notification is-info">Second nested column</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
