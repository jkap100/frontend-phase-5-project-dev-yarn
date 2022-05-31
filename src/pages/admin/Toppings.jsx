import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.7,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Toppings = ({
  crusts,
  setCrusts,
  sauces,
  setSauces,
  veggies,
  setVeggies,
  meats,
  setMeats,
}) => {
  useEffect(() => {
    fetch("http://localhost:3000/crusts").then((r) => {
      if (r.ok) {
        r.json().then(setCrusts);
      } else {
        r.json().then((error) => console.log(error.errors));
        // navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/sauces").then((r) => {
      if (r.ok) {
        r.json().then(setSauces);
      } else {
        r.json().then((error) => console.log(error.errors));
        // navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/meats").then((r) => {
      if (r.ok) {
        r.json().then(setMeats);
      } else {
        r.json().then((error) => console.log(error.errors));
        // navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/veggies").then((r) => {
      if (r.ok) {
        r.json().then(setVeggies);
      } else {
        r.json().then((error) => console.log(error.errors));
        // navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const orderTopping = (e) => {
    e.preventDefault();
    console.log("order");
  };

  const deleteCrust = (c) => {
    console.log(c);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };
    fetch(`http://localhost:3000/crusts/${c.id}`, {
      method: "DELETE",
      headers: headers,
    }).then((r) => {
      if (r.ok) {
        console.log("deleted");

        fetch("http://localhost:3000/crusts").then((r) => {
          if (r.ok) {
            r.json().then(setCrusts);
          } else {
            r.json().then((error) => console.log(error.errors));
            // navigate("/login");
          }
        });
      } else {
        r.json().then((error) => console.log(error.errors));
      }
    });
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <h3 className="bd-notification is-info">Toppings</h3>
          <div className="columns is-mobile">
            <div className="column">
              <h3 className="bd-notification is-info">Crust</h3>
              <ul>
                {crusts.map((crust) => (
                  <li onClick={() => deleteCrust(crust)}>
                    {crust.name}
                    {/* <button onClick={(c) => deleteCrust(c)}></button> */}
                  </li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h3 className="bd-notification is-info">Sauce</h3>
              <ul>
                {sauces.map((sauce) => (
                  <li>{sauce.name}</li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h3 className="bd-notification is-info">Meats</h3>
              <ul>
                {meats.map((meat) => (
                  <li>{meat.name}</li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h3 className="bd-notification is-info">Veggies</h3>
              <ul>
                {veggies.map((veggie) => (
                  <li>{veggie.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <h3 className="bd-notification is-danger">Add a Topping</h3>
          <form onSubmit={orderTopping}>
            <div className="field">
              <label className="label has-text-white"></label>
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  name="topping"
                  placeholder="Topping"
                  // value={username}
                  //   onChange={(event) => setUsername(event.target.value)}
                ></input>
              </p>
            </div>
            <div className="field">
              <label className="label has-text-white"></label>
              <p className="control has-icons-left has-icons-right">
                <select
                  className="input"
                  type="text"
                  name=""

                  //   value={password}
                  //   onChange={(event) => setPassword(event.target.value)}
                >
                  <option>Select Type</option>
                  <option>Crust</option>
                  <option>Sauce</option>
                  <option>Meat</option>
                  <option>Veggie</option>
                </select>
              </p>
            </div>

            <div className="field">
              <p className="control">
                <motion.button variants={buttonVariants} whileHover="hover">
                  Order
                </motion.button>
              </p>
            </div>
          </form>
          <div className="columns is-mobile">
            {/* <div className="column is-one-third">
              <p className="bd-notification is-danger">50%</p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger">Auto</p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger">Auto</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toppings;
