import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    &>a{
        text-decoration: none;
        color:black;
        transition: all 0.2s linear;
        &:hover{
            color:#6749E2;
        }
    }
`;

const ForgetPasswordStyle = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
`;


const ForgetPassword = ({
    children,
    link }) => {
    return (
        <Wrapper>
            <Link to={link}>
                <ForgetPasswordStyle>
                    {children}
                </ForgetPasswordStyle>
            </Link>
        </Wrapper>
    );
}

export default ForgetPassword;
