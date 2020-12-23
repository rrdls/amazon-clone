import React, { useEffect } from "react";
import { GlobalStyle } from "../src/assets/styles/global";
import { useDispatch } from "react-redux";
import Routes from "./config/routes";
import { auth } from "./firebase";
import * as actionCreators from "./state/actions";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      authUser
        ? dispatch(actionCreators.setUser(authUser))
        : dispatch(actionCreators.setUser(null));
    });
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
