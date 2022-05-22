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
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Crust from "../pages/order-pizza/Crust";
import Sauce from "../pages/order-pizza/Sauce";
import Meats from "../pages/order-pizza/Meats";
import Veggies from "../pages/order-pizza/Veggies";
import PizzaOrder from "./PizzaOrder";
import Cart from "../pages/Cart";
import Map from "../pages/Location";

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

  //CRUST
  const [crusts, setCrusts] = useState([]);
  const [crustOrder, setCrustOrder] = useState([]);

  //SAUCE
  const [sauces, setSauces] = useState([]);
  const [sauceOrder, setSauceOrder] = useState([]);

  //MEATS
  const [meats, setMeats] = useState([]);
  const [meatsOrder, setMeatsOrder] = useState([]);

  //VEGGIES
  const [veggies, setVeggies] = useState([]);
  const [veggiesOrder, setVeggiesOrder] = useState([]);

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
            path="/"
            element={
              <Login
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/crust"
            element={
              <Crust
                crusts={crusts}
                setCrusts={setCrusts}
                crustOrder={crustOrder}
                setCrustOrder={setCrustOrder}
                sauces={sauces}
                setSauces={setSauces}
                sauceOrder={sauceOrder}
                setSauceOrder={setSauceOrder}
                meats={meats}
                setMeats={setMeats}
                meatsOrder={meatsOrder}
                setMeatsOrder={setMeatsOrder}
                veggies={veggies}
                setVeggies={setVeggies}
                veggiesOrder={veggiesOrder}
                setVeggiesOrder={setVeggiesOrder}
              />
            }
          />
          <Route
            path="/sauce"
            element={
              <Sauce
                crusts={crusts}
                setCrusts={setCrusts}
                crustOrder={crustOrder}
                setCrustOrder={setCrustOrder}
                sauces={sauces}
                setSauces={setSauces}
                sauceOrder={sauceOrder}
                setSauceOrder={setSauceOrder}
                meats={meats}
                setMeats={setMeats}
                meatsOrder={meatsOrder}
                setMeatsOrder={setMeatsOrder}
                veggies={veggies}
                setVeggies={setVeggies}
                veggiesOrder={veggiesOrder}
                setVeggiesOrder={setVeggiesOrder}
              />
            }
          />
          <Route
            path="/meats"
            element={
              <Meats
                crusts={crusts}
                setCrusts={setCrusts}
                crustOrder={crustOrder}
                setCrustOrder={setCrustOrder}
                sauces={sauces}
                setSauces={setSauces}
                sauceOrder={sauceOrder}
                setSauceOrder={setSauceOrder}
                meats={meats}
                setMeats={setMeats}
                meatsOrder={meatsOrder}
                setMeatsOrder={setMeatsOrder}
                veggies={veggies}
                setVeggies={setVeggies}
                veggiesOrder={veggiesOrder}
                setVeggiesOrder={setVeggiesOrder}
              />
            }
          />
          <Route
            path="/veggies"
            element={
              <Veggies
                crusts={crusts}
                setCrusts={setCrusts}
                crustOrder={crustOrder}
                setCrustOrder={setCrustOrder}
                sauces={sauces}
                setSauces={setSauces}
                sauceOrder={sauceOrder}
                setSauceOrder={setSauceOrder}
                meats={meats}
                setMeats={setMeats}
                meatsOrder={meatsOrder}
                setMeatsOrder={setMeatsOrder}
                veggies={veggies}
                setVeggies={setVeggies}
                veggiesOrder={veggiesOrder}
                setVeggiesOrder={setVeggiesOrder}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </AnimatePresence>
      <NavbarBottom />
    </>
  );
}

export default AnimatedRoutes;
