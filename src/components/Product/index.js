import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Container, ProductInfo, StarRateIcon } from "./styles";
import * as actionCreators from "../../state/actions";

import { default as UUID } from "node-uuid";
const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasket = useCallback(() => {
    dispatch(
      actionCreators.addToBasket({
        id,
        title,
        image,
        price,
        rating,
        idBasket: UUID.v4(),
      })
    );
  }, []);

  return (
    <Container>
      <ProductInfo>
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRateIcon />
              </p>
            ))}
        </div>
      </ProductInfo>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </Container>
  );
};

export default Product;
