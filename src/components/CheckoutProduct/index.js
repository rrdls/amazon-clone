import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  CheckoutProductInfo,
  CheckoutProductRating,
  StarRateIcon,
} from "./styles";
import * as actionCreators from "../../state/actions";

function CheckoutProduct({ id, image, title, price, rating, idBasket }) {
  const dispatch = useDispatch();

  const removeFromBasket = useCallback(() => {
    dispatch(
      actionCreators.removeFromBasket({
        idBasket,
      })
    );
  }, []);

  return (
    <Container>
      <img src={image} alt="" />
      <CheckoutProductInfo>
        <h1>{title}</h1>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <CheckoutProductRating>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarRateIcon />
              </p>
            ))}
        </CheckoutProductRating>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </CheckoutProductInfo>
    </Container>
  );
}

export default CheckoutProduct;
