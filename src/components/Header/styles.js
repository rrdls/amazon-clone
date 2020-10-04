import styled from "styled-components";
import { Search, ShoppingBasket } from "@material-ui/icons";
export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  div:not(:last-child) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    span:nth-child(1) {
      font-size: 10px;
    }
    span:nth-child(2) {
      font-size: 13px;
      font-weight: 800;
    }
  }
  div:nth-child(4) {
    display: flex;
    align-items: center;
    color: white;
    font-size: 13px;
    font-weight: 800;
    span {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
  > input {
    height: 22px;
    padding: 10px;
    border: none;
    width: 100%;
  }
`;

export const ShoppingBasketIcon = styled(ShoppingBasket)`
  cursor: pointer;
`;

export const SearchIcon = styled(Search)`
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
  cursor: pointer;
`;
