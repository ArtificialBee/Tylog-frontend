import React from 'react';
import styled, { useTheme } from 'styled-components/macro';
import { Link } from 'react-router-dom';

//Styled components
import { Button, WidthFromLeft } from '../../style';

const NavbarStyle = styled.div`
    width:100%;
    display:flex;
    justify-content: right;
`;

const NavbarItems = styled.div`
    width:320px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:20px 20px 0 auto;
    &>a{
        text-decoration:none;
    }
`;

const NavbarLinks = styled.p`
    font-size:0.9375em;
    color:${({ color }) => color};
    font-family:  'Montserrat', sans-serif;
    cursor:pointer;
    transition: all 0.1s ease-in-out;
    margin:0;
    padding:0;
    position:relative;
    &::after{
        position:absolute;
        content:'';
        width:0%;
        height:1px;
        background:${({ theme }) => theme.colors.lightprpl};
        bottom:-5px;
        left:0;
        transition:width 0.3s cubic-bezier(0.415, 1.025, 0.675, 0.945);
    }
    &:hover{
        color:${(props) => props.hover ? props.theme.colors.lightprpl : "none"};
        transition: all 0.1s ease-in-out;
        &::after{
            width:${({ noAfter }) => noAfter ? "0%" : "100%"};
        }
    }
`;

const LoginBtn = styled(Button)`
    height:35px;
    border-radius:5px;
    font-size:0.9375em;
    width:80px;
    background:none;
    color:#681F7D;
    /* border: 2px solid ${({ theme }) => theme.colors.darkprpl}; */
    border: none;
`;

const Navbar = () => {

    const theme = useTheme();

    return (
        <NavbarStyle>
            <NavbarItems>
                <Link to="/doc" >
                    <NavbarLinks color={theme.colors.lightgray} hover>
                        Documentation
                    </NavbarLinks>
                </Link>
                <Link to="/signup" >
                    <NavbarLinks color={theme.colors.lightgray} hover>
                        Sign up
                    </NavbarLinks>
                </Link>
                <Link to="/login" >
                    <LoginBtn
                        hoverBg="#8400ab"
                        hoverColor="white">
                        <NavbarLinks noAfter>
                            Login
                        </NavbarLinks>
                    </LoginBtn>
                </Link>
            </NavbarItems>
        </NavbarStyle>
    );
}

export default Navbar;
