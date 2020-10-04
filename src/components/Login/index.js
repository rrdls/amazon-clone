import React, { useState } from "react";

import { Container, Wrapper } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const signIn = await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
      console.log(signIn.user);
    } catch (e) {
      setMessageError(e.message);
    }
  };

  const registerUser = async (e) => {
    try {
      const authentication = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      history.push("/");
    } catch (e) {
      setMessageError(e.message);
    }
  };

  return (
    <Container>
      <Link to="/">
        <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>

      <Wrapper>
        {messageError && (
          <span>
            <p>{messageError}</p>
          </span>
        )}
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>

        <p>
          Ao continuar, você concorda com as Condições de Uso da Amazon. Por
          favor verifique a Notificação de Privacidade, Notificação de Cookies a
          Notificação de Anúncios Baseados em Interesse.
        </p>
        <button onClick={registerUser}>Create your Amazon account</button>
      </Wrapper>
    </Container>
  );
}

export default Login;
