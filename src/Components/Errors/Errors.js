import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.p`
    color:red;
    font-size: 0.8rem;
`;

const Errors = ({ children }) => {
    return (
        <ErrorStyle>
            {children}
        </ErrorStyle>
    );
}

export default Errors;
