import React from "react";

import {
  Container,
  HeaderLogo,
  HeaderSearch,
  HeaderNav,
  SearchIcon,
  ShoppingBasketIcon,
} from "./styles";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { auth } from "../../firebase";

const Header = () => {
  const [basket, user] = useSelector((state) => {
    return [state.basket.basket, state.user.user];
  });

  const handleAuthentication = () => {
    user && auth.signOut();
  };
  return (
    <Container>
      <Link to="/">
        <HeaderLogo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>

      <HeaderSearch>
        <input type="text" />
        <SearchIcon />
      </HeaderSearch>

      <HeaderNav>
        <div>
          <span>Hello Renato</span>
          <span onClick={handleAuthentication}>
            <Link to={!user && "/login"}>{user ? "Sign Out" : "Sign In"}</Link>
          </span>
        </div>

        <div>
          <span>Returns</span>
          <span>& Orders</span>
        </div>

        <div>
          <span>Your</span>
          <span>Prime</span>
        </div>
        <Link to="/checkout">
          <div>
            <ShoppingBasketIcon />
            <span>{basket.length}</span>
          </div>
        </Link>
      </HeaderNav>
    </Container>
  );
};

export default Header;
