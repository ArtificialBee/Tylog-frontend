import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoSVG from '../../Assets/Logo.svg';

const LogoImage = styled.img`
    position:absolute;
    right:20px;
    top:20px;
    @media(max-width:700px){
        width:100px;
        height:100px;
    }
`;

const Logo = () => {
    return (
        <Link to="/">
            <LogoImage src={LogoSVG} />
        </Link>
    );
}

export default Logo;
