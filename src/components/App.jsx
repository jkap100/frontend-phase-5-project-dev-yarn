import "../App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

// import Login from "../pages/Login";
// import Home from "../pages/Home";

function App() {
  // const [error, setErrors] = useState("");

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
