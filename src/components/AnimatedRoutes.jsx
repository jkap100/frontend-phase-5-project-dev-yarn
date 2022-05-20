import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import Header from "./Header";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Crust from "../pages/order-pizza/Crust";
import Sauce from "../pages/order-pizza/Sauce";
import Meats from "../pages/order-pizza/Meats";
import PizzaOrder from "./PizzaOrder";

function AnimatedRoutes() {
  const location = useLocation();
  const [error, setErrors] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [pizza, setPizza] = useState({
    crust: "",
    sauce: "Red",
    toppings: ["pepperoni", "ham", "cats"],
  });
  const [spanClass, setSpanClass] = useState("");

  //CRUST
  const [crusts, setCrusts] = useState([]);
  const [crustOrder, setCrustOrder] = useState([]);

  //SAUCE
  const [sauces, setSauces] = useState([]);
  const [sauceOrder, setSauceOrder] = useState([]);

  //MEATS
  const [meats, setMeats] = useState([]);
  const [meatsOrder, setMeatsOrder] = useState([]);

  const addCrust = (crust) => {
    setPizza({ ...pizza, crust });
  };
  // console.log(pizza);

  return (
    <>
      <Navbar />
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/login"
            element={
              <Login
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/crust"
            element={
              <Crust
                crusts={crusts}
                setCrusts={setCrusts}
                addCrust={addCrust}
                pizza={pizza}
                spanClass={spanClass}
                setSpanClass={setSpanClass}
                crustOrder={crustOrder}
                setCrustOrder={setCrustOrder}
              />
            }
          />
          <Route
            path="/sauce"
            element={
              <Sauce
                sauces={sauces}
                setSauces={setSauces}
                // addSauce={addSauce}
                pizza={pizza}
                spanClass={spanClass}
                setSpanClass={setSpanClass}
                sauceOrder={sauceOrder}
                setSauceOrder={setSauceOrder}
                crustOrder={crustOrder}
                setCrustOrder={setCrustOrder}
              />
            }
          />
          <Route
            path="/meats"
            element={
              <Meats
                sauces={sauces}
                setSauces={setSauces}
                // addSauce={addSauce}
                pizza={pizza}
                spanClass={spanClass}
                setSpanClass={setSpanClass}
                sauceOrder={sauceOrder}
                setSauceOrder={setSauceOrder}
                crustOrder={crustOrder}
                setCrustOrder={setCrustOrder}
                meats={meats}
                setMeats={setMeats}
                meatsOrder={meatsOrder}
                setMeatsOrder={setMeatsOrder}
              />
            }
          />
        </Routes>
      </AnimatePresence>
      <NavbarBottom />
    </>
  );
}

export default AnimatedRoutes;
