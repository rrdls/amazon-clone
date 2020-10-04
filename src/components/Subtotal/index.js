import React from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";

function Subtotal() {
  const basket = useSelector((state) => {
    return state.basket.basket;
  });

  const calcSubtotal = () => {
    return basket.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  return (
    <Container>
      <p>
        Subtotal ({basket.length} items):
        <strong>{` $ ${calcSubtotal()} `}</strong>
      </p>
      <small>
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </Container>
  );
}

export default Subtotal;
