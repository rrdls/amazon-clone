import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div``;

export const GlobalStyle = createGlobalStyle`
        *{
            box-sizing: border-box;
            margin:0;
            padding:0;
            outline:0;
        }

        body{
            background-color: rgb(234,237,237);
            font-family: 'Roboto', sans-serif;
        
        }

        a{
            text-decoration: none;
        }
`;
