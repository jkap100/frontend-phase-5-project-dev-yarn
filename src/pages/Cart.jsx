import React, { useEffect } from "react";
import CartItems from "../components/CartItems";

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

  console.log(cart.length);
  const cartItems = cart.map((c) => (
    <CartItems key={c.id} cartObj={c} cart={cart} setCart={setCart} />
  ));

  return (
    <div className="container">
      <div className="column">
        <div className="">
          <table id="table-background" className="table is-fullwidth">
            <thead>
              <tr className="has-text-white">
                <th className="cart-image has-text-centered has-text-white">
                  Crust
                </th>
                <th className="product has-text-white">Sauce</th>
                <th className="category has-text-centered has-text-white">
                  Toppings
                </th>
                <th className="price has-text-centered has-text-white">
                  Price
                </th>
                <th className="qty has-text-centered has-text-white">
                  Quantity
                </th>
                <th className="Total has-text-centered has-text-white">
                  Total
                </th>
                <th className="has-text-centered has-text-white">Add</th>
              </tr>
            </thead>
            {cartItems}
          </table>
          <div className="box has-background-black">
            <h3 className="title is-4 has-text-white">
              {/* Subtotal - Skis : ${totalSkiPrice.toLocaleString("en-US")} */}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
