import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const InputStyle = styled.div`
    display:flex;
    align-items: center;
    border-bottom:1px solid ${({ bColor }) => bColor};
    padding-bottom:2px;
    margin:15px 0;
    transition: all 0.2s linear;
    width:100%;
`;

const InputField = styled.input`
    background:transparent;
    border:none;
    outline:none;
    width:300px;
    font-size:1.25rem;
    font-weight:lighter;
    color:${({ fontColor }) => fontColor};
    padding-left:10px;
    /* height:25px; */
`;

const Icon = styled.div`
    display:flex;
    color:${({ color }) => color};
    transition: all 0.2s linear;
`;



const Input = ({
    type,
    placeholder,
    change,
    icon
}) => {

    const [color, setColor] = useState('#646464');

    return (
        <InputStyle bColor={color}>
            <Icon color={color}>
                {icon}
            </Icon>
            <InputField
                type={type}
                placeholder={placeholder}
                onChange={change}
                fontColor={color}
                onFocus={() => setColor('#6749E2')}
                onBlur={() => setColor('#646464')} />
        </InputStyle>
    );
};

export default Input;
