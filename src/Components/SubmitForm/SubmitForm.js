import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'

import { BiChevronsRight } from 'react-icons/bi';

const ArrowsAnimation = keyframes`
    0%{
        transform:translate(0,0);
    }
    100%{
        transform:translate(5px,0);
    }
`;

const Wrapper = styled.button`
    display:flex;
    align-items:center;
    padding:0;
    margin:0;
    background:none;
    border:0px;
    cursor: pointer;
    width:100%;
    justify-content: center;
    &>svg{
        padding:0;
        margin:0;
    }
    &:hover{
        &>svg{
            animation: ${ArrowsAnimation} 0.3s alternate infinite;
        }
    }
`;

const ChildrenText = styled.p`
    color: black;
    font-size:1.8rem;
    padding:0;
    margin:0;
`;

const SubmitForm = ({
    children,
    color
}) => {
    return (
        <Wrapper>
            <ChildrenText>{children}</ChildrenText>
            <BiChevronsRight color={color} size="50" style={{ padding: "0", margin: "0" }} />
        </Wrapper>
    );
}

export default SubmitForm;
