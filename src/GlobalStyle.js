import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:  'Montserrat', sans-serif;
        max-width: 1440px;
        margin:0 auto;
        font-size: 16px;
        &::-webkit-scrollbar {
            display:none;
        }
    }
`;

export default GlobalStyle;

