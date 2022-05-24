import React from "react";

function CartItems({ cartObj, cart, setCart }) {
  //   console.log(cartObj);

  //   console.log(cartObj.length);
  const orderToppings = cartObj.pizza_order_toppings.map(
    (t) => `${t.topping}, `
  );

  const price = cartObj.pizza_order_toppings.length * 1.5 + 10;
  //   console.log(price);

  const handleAddToCart = (p) => {
    console.log(p);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    };
    const body = {
      quantity: p.quantity + 1,
    };
    fetch(`http://localhost:3000/pizza_orders/${p.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    }).then((r) => {
      if (r.ok) {
        console.log("added");
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
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  };

  return (
    <tbody>
      <tr>
        <td className="has-text-white is-vcentered">{cartObj.crust}</td>
        <td className="has-text-white is-vcentered">{cartObj.sauce}</td>

        <td className="has-text-white is-vcentered">{orderToppings}</td>
        <td className="has-text-white is-vcentered">${price}</td>
        <td className="has-text-white is-vcentered">{cartObj.quantity}</td>
        <td className="has-text-white is-vcentered">
          ${price * cartObj.quantity}
        </td>
        <td className="has-text-centered is-vcentered">
          <button onClick={() => handleAddToCart(cartObj)}>+</button>
        </td>
      </tr>
    </tbody>
  );
}

export default CartItems;
