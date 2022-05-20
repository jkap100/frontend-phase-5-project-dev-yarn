import React from "react";
import { motion } from "framer-motion";

function PizzaOrder({ pizza }) {
  return (
    <div>
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
          {pizza.crust}
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
    </div>
  );
}

export default PizzaOrder;
