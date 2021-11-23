import React, { useEffect } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
width:${({ isOpen }) => isOpen ? "226px" : "40px"};
/* transition: width 1s linear; */
margin:5px auto;
height: 50px;
display: flex;
align-items: center;
/* background: white; */
justify-content:${({ isOpen }) => isOpen ? "" : "center"} ;
padding-left: ${({ isOpen }) => isOpen ? "18px" : "0"} ;
border-radius: 10px;
transition:margin 0.3s ease-in-out;
    &:hover{
    background: white;
        div{
        color:#0B0D13;
    }
        p{
        color:#0B0D13;
    }
}
`;

const Icon = styled.div`
color: white;
padding:0;
margin:0;
`;

const ItemName = styled.p`
opacity:${({ show }) => show ? "1" : "0"};
overflow: hidden;
color: white;
font-size: 1rem;
margin-left: 15px;
transition: opacity 1s linear;
`;

const Item = ({
    background,
    icon,
    textColor,
    children,
    isOpen }) => {

    return (
        <Wrapper isOpen={isOpen}>
            <Icon>
                {icon}
            </Icon>
            <ItemName show={isOpen}>{children}</ItemName>
        </Wrapper>
    );
}

export default Item;
