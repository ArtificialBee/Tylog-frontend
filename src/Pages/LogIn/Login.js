import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

//Components
import Input from '../../Components/Input/Input';
import ForgotPassword from '../../Components/ForgotPassword/ForgetPassword';
import SubmitForm from '../../Components/SubmitForm/SubmitForm';
import Errors from '../../Components/Errors/Errors';

//Assets
import DummyProfilePicture from '../../Assets/Login/DummyProfilePicture.svg'
import { BiEnvelope, BiKey } from 'react-icons/bi'
import Logo from '../../Components/Logo/Logo';


const LoginWrapper = styled.div`
    width:100%;
    height:100%;
`;

const LoginStyle = styled.div`
    width:480px;
    margin:0 auto;
    padding-top: 150px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const DummyProfile = styled.img`
    width:170px;
    height:170px;
    margin:0 auto;
    @media(max-width:300px){
        width:70px;
        height:70px;
    }
`;

const InputWrapper = styled.form`
    margin-top:50px;
`;

const LogoImage = styled.img`
    position:fixed;
    right:32px;
    top:32px;
`;

const ErrorStyle = styled.p`
    color:red;
    font-size:0.6rem;
`;



const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('ISPISANO ', data);
    }

    return (
        <LoginWrapper>
            <Logo />
            <LoginStyle >
                <DummyProfile src={DummyProfilePicture} />
                <InputWrapper onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="email"
                        placeholder="Email"
                        register={register}
                        label="email"
                        required
                        icon={<BiEnvelope size={20} />}
                        errors />
                    {errors.email?.type === "required" ? <ErrorStyle>This field is required</ErrorStyle> : ""}
                    <Input
                        type="password"
                        required
                        placeholder="Password"
                        register={register}
                        label="password"
                        icon={<BiKey size={20} />}
                        errors />
                    {errors.password?.type === "required" ? <ErrorStyle>This field is required</ErrorStyle> : ""}
                    <ForgotPassword link={'/forget-password'}>
                        Forget Password?
                    </ForgotPassword>
                    <SubmitForm
                        color="#7461C0">
                        Login
                    </SubmitForm>
                </InputWrapper>
            </LoginStyle>
        </LoginWrapper >
    );
}

export default Login;
