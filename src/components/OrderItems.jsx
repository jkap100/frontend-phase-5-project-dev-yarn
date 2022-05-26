import React from "react";
import { motion } from "framer-motion";

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

function orderItems({ orderObj }) {
  const orderToppings = orderObj.pizza_order_toppings.map(
    (t) => `${t.topping}, `
  );

  return (
    <>
      <tbody className="mt-4">
        <tr className="mt-6">
          <td className="has-text-white is-vcentered">{orderObj.due_date}</td>

          <td className="has-text-white is-vcentered">{orderObj.due_time}</td>
          <td className="has-text-white is-vcentered">
            {orderObj.first_name} {orderObj.last_name}
          </td>
          <td className="has-text-white is-vcentered">{orderObj.status}</td>

          <td className="has-text-white is-vcentered">{orderObj.order_type}</td>
          <td className="has-text-white has-text-centered is-vcentered">
            {orderObj.crust}
          </td>
          <td className="has-text-white has-text-centered is-vcentered">
            {orderObj.sauce}
          </td>

          <td className="has-text-white">{orderToppings}</td>

          <td className="has-text-white is-vcentered">{orderObj.quantity}</td>
          <td className="has-text-white is-vcentered"> ${orderObj.price} </td>

          <td className="has-text-centered is-vcentered">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              //   onClick={() => handleAddToCart(cartObj)}
            >
              +
            </motion.button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default orderItems;
