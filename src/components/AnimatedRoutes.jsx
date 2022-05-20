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

function AnimatedRoutes() {
  const [error, setErrors] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [pizza, setPizza] = useState({
    crust: "",
    toppings: ["pepperoni", "ham", "cats"],
  });
  const [spanClass, setSpanClass] = useState("");

  //CRUST
  const [crusts, setCrusts] = useState([]);

  const addCrust = (crust) => {
    setPizza({ ...pizza, crust });
  };

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
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
        <Route path="/home" element={<Home />} />
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
            />
          }
        />
      </Routes>
      <NavbarBottom />
    </>
  );
}

export default AnimatedRoutes;
