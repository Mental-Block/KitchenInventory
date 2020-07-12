import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap');

    html{
        background: ${(props) => props.theme.white};
        font-family: ${(props) => props.theme.fontFamily};
    }

    body{
         box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
        5px 5px 20px ${(props) => props.theme.grey};
        max-width: 1366px;
        margin: 0 auto;
    }

    img{
        width: 100%;
        display: block;
    }
`;

export default GlobalStyle;
