import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

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

function PizzaOrder({ crustOrder, pizza }) {
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul>
        <li>
          <strong className="underline has-text-white">Crust:</strong>
        </li>
        <motion.li
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "#f8e112",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {crustOrder.name}
        </motion.li>
        <li>
          <strong className="underline has-text-white">Sauce:</strong>
        </li>
        <motion.li
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "#f8e112",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {pizza.sauce}
        </motion.li>
        <li className="">
          <strong className="underline has-text-white">Toppings:</strong>
        </li>
        {pizza.toppings.map((topping) => {
          // let spanClass = pizza.topping === crust ? "active" : "";
          //   console.log(crust);
          return (
            <motion.li
              key={topping.id}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="">{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      <motion.div className="next" variants={nextVariants}>
        <Link to="/toppings">
          <div className="mt-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick=""
            >
              Start Over
            </motion.button>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default PizzaOrder;
