import styled from "styled-components";
import { StarRate } from "@material-ui/icons";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
  > img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
  > button {
    background-color: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
    padding: 2.5px;
  }
`;

export const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  p:nth-child(2) {
    strong {
      margin-top: 5px;
    }
  }
  div {
    p {
      display: flex;
    }
  }
`;

export const StarRateIcon = styled(StarRate)`
  path {
    fill: #cd9042;
  }
`;