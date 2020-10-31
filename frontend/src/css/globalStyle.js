import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap');

    *, *::before, *::after/* No idea why h1 is ignoring margin */{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        font-size: 16px;
        background: ${(props) => props.theme.white};
        font-family: ${(props) => props.theme.fontFamily};
    }

    img{
        width: 100%;
        display: block;
    }
`;

export default GlobalStyle;
