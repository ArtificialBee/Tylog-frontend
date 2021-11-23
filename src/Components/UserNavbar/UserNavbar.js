import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import Item from './Item/Item';

//Assets
import Logo from '../../../src/Assets/SideBar/Logo_sidebar.svg';
import * as Icons from 'react-icons/bi'

const UserNavbarStyle = styled.div`
    position:relative;
    transform:${({ show }) => show ? "translate(0,0)" : "translate(-216px,0)"};
    transition:transform 1s ease-in-out;
    height:100vh;
    width:266px;
    background:#0B0D13;
`;

const NavbarHeader = styled.div`
    padding-left:25px;
    padding-right: 17px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top:25px;
`;

const NavbarLogo = styled.img`
`;

const NavbarTitle = styled.h1`
padding: 85px 85px 0 20px;
margin: 0;
color: white;
font-weight: 400;
font-size: 1.5625rem;
transition: display 0.3s 1s linear;
`;

const ItemsWrapper = styled.div`
    margin-top: 18px;
`;

const Footer = styled.div`
    background:#2A3247;
    width:100%;
    height:100px;
    position:fixed;
    bottom:0;
    
`;

const Hamburger = styled.div`
width: 30px;
height:20px;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
    span{
        height: 2px;
        border-radius: 200px;
        background:white;
        transition: width 0.3s linear;
    }
    .first{
        width:100%;
    }
    .second{
        width:${({ isOpen }) => isOpen ? "20px" : "25px"};
    }
    .third{
        width:${({ isOpen }) => isOpen ? "10px" : "20px"};

    }
z-index: 200;
`;

const UserNavbar = () => {

    const [navbarState, setNavbarState] = useState(true);

    return (
        <>
            <UserNavbarStyle show={navbarState}>
                <NavbarHeader>
                    <NavbarLogo src={Logo} />
                    <Hamburger isOpen={navbarState} onClick={() => setNavbarState(!navbarState)}>
                        <span className="first" />
                        <span className="second" />
                        <span className="third" />
                    </Hamburger>
                </NavbarHeader>
                <ItemsWrapper>
                    <Item isOpen={navbarState} icon={<Icons.BiSearchAlt size="20" />}>Search</Item>
                    <Item isOpen={navbarState} icon={<Icons.BiBuildings size="20" />}>Organisations</Item>
                    <Item isOpen={navbarState} icon={<Icons.BiFolderOpen size="20" />}>Projects</Item>
                    <Item isOpen={navbarState} icon={<Icons.BiFileBlank size="20" />}>Epics</Item>
                    <Item isOpen={navbarState} icon={<Icons.BiBookmark size="20" />}>Tickets</Item>
                    <Item isOpen={navbarState} icon={<Icons.BiTask size="20" />}>Tasks</Item>
                    <Item isOpen={navbarState} icon={<Icons.BiGroup size="20" />}>Team</Item>
                </ItemsWrapper>
                <Footer />

            </UserNavbarStyle>
        </>
    );
}

export default UserNavbar;
