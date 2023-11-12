'use client'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  body{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        background: #F9F9F9;
    }
`

export default GlobalStyle;