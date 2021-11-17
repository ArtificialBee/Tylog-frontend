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

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:0;
    margin:0;
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
    color,
    link
}) => {
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <Wrapper>
                <ChildrenText>{children}</ChildrenText>
                <BiChevronsRight color={color} size="50" style={{ padding: "0", margin: "0" }} />
            </Wrapper>
        </Link>
    );
}

export default SubmitForm;
