import React, { useEffect } from "react";
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

function Orders({
  locations,
  setLocations,
  storeLocation,
  setStoreLocation,
  status,
  setStatus,
  orderType,
  setOrderType,
}) {
  useEffect(() => {
    fetch("http://localhost:3000/stores").then((r) => {
      if (r.ok) {
        r.json().then(setLocations);
      } else {
        r.json().then((error) => console.log(error.errors));
        // navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    console.log("select");
    const storeLocationId = storeLocation.split("");
    console.log(storeLocationId[0]);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(
      `http://localhost:3000/orders?store_id=${storeLocationId}&order_type=${orderType}&status=${status}`,
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((r) => r.json())
      .then((r) => {
        if (r.error) {
          console.log(r.error);
        } else {
          console.log(r);
        }
      });
  };

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
                    <option key={l.id}>
                      {l.id} {l.name}
                    </option>
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
                  <option>Order Placed</option>
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
