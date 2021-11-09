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
            transition:width 0.3s cubic-bezier(1.000, 0.010, 0.570, 0.665);
    }
    &:hover{
        color:${(props) => props.hover ? props.theme.colors.lightprpl : "none"};
        transition: all 0.1s ease-in-out;
        &::after{
            width:${({ noAfter }) => noAfter ? "0%" : "100%"};
        }
    }
`;

const Navbar = () => {

    const theme = useTheme();

    return (
        <NavbarStyle>
            <NavbarItems>
                <Link to="/doc" style={{ textDecoration: "none" }}>
                    <NavbarLinks color={theme.colors.lightgray} hover>
                        Documentation
                    </NavbarLinks>
                </Link>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                    <NavbarLinks color={theme.colors.lightgray} hover>
                        Sign up
                    </NavbarLinks>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button height="35px"
                        borderRadius="50px"
                        width="80px"
                        bg="none"
                        textColor="#681F7D"
                        border={`2px solid ${theme.colors.darkprpl}`}
                        hoverBg="#8400ab"
                        hoverColor="white">
                        <NavbarLinks noAfter>
                            Login
                        </NavbarLinks>
                    </Button>
                </Link>
            </NavbarItems>
        </NavbarStyle>
    );
}

export default Navbar;
