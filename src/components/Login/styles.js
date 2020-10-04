import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: white;

  > a > img {
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
  > span {
    margin-bottom: 10px;
    p {
      color: red;
    }
  }
  h1 {
    font-weight: 500;
    margin-bottom: 20px;
    align-self: center;
  }
  form {
    display: flex;
    flex-direction: column;
    h5 {
      margin-bottom: 5px;
    }
    input {
      height: 30px;
      margin-bottom: 10px;
      background-color: white;
      width: 98%;
      border: 1px solid black;
      border-radius: 4px;
      padding: 10px;
    }
    input:focus {
      border: 1px solid #f0c14b;
    }
    > button {
      background-color: #f0c14b;
      border-radius: 4px;
      width: 100%;
      height: 30px;
      border: 1px solid;
      margin-top: 10px;
      border-color: #a88734 #9c7e31 #846a29;
      cursor: pointer;
    }
  }
  p {
    margin-top: 15px;
    font-size: 12px;
    text-align: justify;
  }
  > button {
    border-radius: 4px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
    cursor: pointer;
  }
`;
