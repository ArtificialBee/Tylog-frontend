import React, { useState } from 'react';
import styled from 'styled-components';

// //Components
// import Errors from '../Errors/Errors';

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
    font-size:1rem;
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
    icon,
    register,
    label,
    required,
    minLength,
    maxLength,
    errors
}) => {

    const [color, setColor] = useState('#646464');
    const [pholder, setPholder] = useState(placeholder);

    return (
        <InputStyle bColor={color}>
            <Icon color={color}>
                {icon}
            </Icon>
            <InputField
                type={type}
                placeholder={pholder}
                {...register(label, { required: required, minLength: minLength, maxLength: maxLength })}
                fontColor={color}
                onFocus={() => { setColor('#6749E2'); setPholder('') }}
                onBlur={() => { setColor('#646464'); setPholder(placeholder) }} />
        </InputStyle>
    );
};

export default Input;
