import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    font-size: 16px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga' on;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Nocturno', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
