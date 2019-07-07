import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    border: 0;
    font-family: Helvetica, sans-serif;
  }

  html, body{
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .no-mobile{
      display: none
    }
  }
`
