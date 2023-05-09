"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'DM Sans', Sans-Serif; 
  }

  body {
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    max-width: calc(80%);
  }

  #root {
    height: 100vh;
  }

  html {
    height: 100vh;
  }

  h1,h2,h3,h4,h5 {
    margin: 0;
  }
`

export default GlobalStyle
