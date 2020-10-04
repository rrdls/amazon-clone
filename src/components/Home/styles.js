import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  /* flex-direction: column; */
  max-width: 1500px;
`;

export const Wrapper = styled.div`
  > img {
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
  div {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
