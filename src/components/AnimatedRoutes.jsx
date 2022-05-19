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

function AnimatedRoutes() {
  const [error, setErrors] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
      </Routes>
      <NavbarBottom />
    </>
  );
}

export default AnimatedRoutes;
