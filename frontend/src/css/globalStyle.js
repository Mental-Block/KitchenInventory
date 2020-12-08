import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
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

export default GlobalStyle
