import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Home({ setLoading }) {
  return (
    <div className="body">
      {/* <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">JKAPS PIZZA SHOP</h1>
            <h2 className="subtitle">Hover over Blog</h2>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
