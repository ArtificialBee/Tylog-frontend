import styled from "styled-components";
import { keyframes } from "styled-components";

//Keyframes for animations

export const WidthFromLeft = keyframes`
    0%{
        width:0%;
    }
    100%{
        width:100%;
    }
`;

export const Button = styled.button`
    height:${({ height }) => height};
    border:${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    width:${({ width }) => width};
    background: ${({ bg }) => bg};
    outline:${({ outline }) => outline};
    padding:0;
    color:${({ textColor }) => textColor};
    transition:color 0.1s linear;
    transition:background 0.3s ease-in-out;
    &:hover{
        background:${({ hoverBg }) => hoverBg};
        color:${({ hoverColor }) => hoverColor};
    }
`;