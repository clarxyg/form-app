import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    // valid input 
    --Focus: #333333;  // font and border
    --WithoutFocus: #efeeed;

    // invalid input 
    --InvalidFocus: #eb4a46;

    // button
    --fontAbleButton: #ffffff;
    --backgroundAbleButton: #00c8b3;
    --fontDisabledButton: #dddcdc;
    --backgroundDisabledButton: #f6f6f6;
   
    --hoverEffect: 70%;

    // header 

    --header: #7B68EE;
  }
`;

export default GlobalStyle;
