import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  white: "rgb(255, 255, 255)",
  snow: "rgb(250,250,250)",
  grey: "rgba(214, 214, 214, 1)",
  lightGrey: "rgba(200, 200, 200, 1)",
  black: "rgba(0, 0, 0, 1)",
  green: "rgb(136, 170, 20)",
  greenOff: "rgb(136, 165, 20)",
  red: "rgb(229,0,0)",
  fontFamily: "Playfair Display",
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap');

    *, *::before, *::after, h1/* No idea why h1 is ignoring margin */{
        box-sizing: border-box;
        margin: 0;
    }

    html{
        font-size: 16px;
        background: ${defaultTheme.white};
        font-family: ${defaultTheme.fontFamily};
    }

    img{
        width: 100%;
        display: block;
    }
`;

export default GlobalStyle;
