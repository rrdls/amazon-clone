import styled from "styled-components";
import { StarRate } from "@material-ui/icons";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  > img {
    max-height: 200px;
    width: 180px;
    height: 180px;
    object-fit: contain;
  }
`;

export const CheckoutProductInfo = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > h1 {
    font-size: 17px;
    font-weight: 800;
  }
  > p {
  }

  > button {
    background-color: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
    padding: 2.5px;
    width: 180px;
  }
`;

export const CheckoutProductRating = styled.div`
  display: flex;
`;

export const StarRateIcon = styled(StarRate)`
  path {
    fill: #cd9042;
  }
`;
