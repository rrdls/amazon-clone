import React from "react";
import { useSelector } from "react-redux";

import { Container, CheckoutLeft, CheckoutRight } from "./styles";
import Subtotal from "../Subtotal";

import CheckoutProduct from "../CheckoutProduct";

function Checkout() {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <Container>
      <CheckoutLeft>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2>Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct key={item.idBasket} {...item} />
          ))}
        </div>
      </CheckoutLeft>

      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </Container>
  );
}

export default Checkout;
