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
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
