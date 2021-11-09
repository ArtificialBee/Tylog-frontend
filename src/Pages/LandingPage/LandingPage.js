import React from 'react';
import styled from 'styled-components';

//Assets
import Logo from '../../Assets/Logo.png'

//My components
import Navbar from '../../Components/Navbar/Navbar';

const LandingPageStyle = styled.div`
    width:100vw;
    height:100vh;
`;

const LogoImage = styled.img`
    position:absolute;
    padding-left:20px;
`;

const LandingPage = () => {
    return (
        <LandingPageStyle>
            <LogoImage src={Logo} alt="Logo" />
            <Navbar />

        </LandingPageStyle>
    );
}

export default LandingPage;
