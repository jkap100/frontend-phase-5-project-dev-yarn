import React, { useEffect } from "react";

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
  }, [crusts]);

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
  }, [crusts]);

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
                  <li>{crust.name}</li>
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
          <p className="bd-notification is-danger">Second column</p>
          <div className="columns is-mobile">
            <div className="column is-one-third">
              <p className="bd-notification is-danger">50%</p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger">Auto</p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger">Auto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toppings;
