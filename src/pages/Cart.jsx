import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

function Cart({ cart, setCart }) {
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };

    fetch(
      `http://localhost:3000/carts?user_id=${localStorage.getItem(
        "currentUserId"
      )}`,
      {
        method: "GET",
        headers: headers,
      }
    ).then((r) => {
      if (r.ok) {
        r.json().then(setCart);
      } else {
        r.json().then((error) => console.log(error.errors));
        // navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(cart.length);
  const cartItems = cart.map((c) => (
    <CartItems key={c.id} cartObj={c} cart={cart} setCart={setCart} />
  ));

  let totalPrice = 0;
  const pizzaPrice = cart.map((c) => {
    totalPrice = totalPrice + c.price;
  });

  const checkOut = () => {
    console.log("check out");
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="column">
        <div className="">
          <table id="table-background" className="table is-fullwidth">
            <thead>
              <tr className="has-text-white">
                <th className="cart-image has-text-white">Crust</th>
                <th className="product has-text-white">Sauce</th>
                <th className="category has-text-white">Toppings</th>
                <th className="price has-text-white">Order Type</th>
                <th className="price has-text-white">Price</th>
                <th className="qty has-text-centered has-text-white">
                  Quantity
                </th>
                <th className="Total has-text-white">Total</th>
                <th className="has-text-centered has-text-white">Add</th>
                <th className="has-text-centered has-text-white">Remove</th>
              </tr>
            </thead>
            {cartItems}
            <tfoot>
              <tr>
                <td className="has-text-white is-vcentered"></td>
                <td className="has-text-white is-vcentered"></td>
                <td className="has-text-white is-vcentered"></td>
                <td className="has-text-white is-vcentered">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    onClick={checkOut}
                  >
                    Check Out
                  </motion.button>
                </td>

                <td className="has-text-white is-vcentered"></td>
                <td className="has-text-white has-text-centered is-vcentered">
                  Total
                </td>
                <td className="has-text-white is-vcentered">
                  ${totalPrice.toLocaleString("en-US")}
                </td>
                <td className="has-text-centered is-vcentered">
                  {/* <button onClick={() => handleAddToCart(cartObj)}>+</button> */}
                </td>
                <td className="has-text-centered is-vcentered">
                  {/* <button onClick={() => handeleRemoveFromCart(cartObj)}>-</button> */}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
