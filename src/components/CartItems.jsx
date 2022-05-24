import React from "react";

function CartItems({ cartObj, cart, setCart }) {
  //   console.log(cartObj);

  //   console.log(cartObj.length);
  const orderToppings = cartObj.pizza_order_toppings.map(
    (t) => `${t.topping}, `
  );

  const price = cartObj.pizza_order_toppings.length * 1.5 + 10;
  //   console.log(price);

  return (
    <tbody>
      <tr>
        <td className="has-text-white">{cartObj.crust}</td>
        <td className="has-text-white">{cartObj.sauce}</td>

        <td className="has-text-white">{orderToppings}</td>
        <td className="has-text-white">${price}</td>
        <td className="has-text-white">{cartObj.quantity}</td>
        <td className="has-text-white">${price * cartObj.quantity}</td>
      </tr>
    </tbody>
  );
}

export default CartItems;
