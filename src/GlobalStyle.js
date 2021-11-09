import { createGlobalStyle } from "styled-components";
import theme from "./themes/themes";



const GlobalStyle = createGlobalStyle`
    body{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:  'Montserrat', sans-serif;
        font-size: 16px;
        &::-webkit-scrollbar {
            display:none;
        }
    }
`;

export default GlobalStyle;

