import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html{
        background: ${(props) => props.theme.white};
        font-family: ${(props) => props.theme.fontFamily};
    }

    body{
        box-shadow: -5px 5px 20px ${(props) => props.theme.lightGrey},
            5px 5px 20px ${(props) => props.theme.lightGrey};
        max-width: 1366px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
