import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import Input from '../../Components/Input/Input';
import ForgotPassword from '../../Components/ForgotPassword/ForgetPassword';
import SubmitForm from '../../Components/SubmitForm/SubmitForm';

//Assets
import DummyProfilePicture from '../../Assets/Login/DummyProfilePicture.svg'
import { BiEnvelope, BiKey } from 'react-icons/bi'
// import Logo from '../../Assets/Login/Logo.png'
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



const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const emailHandler = e => {
        setData({ ...data, email: e.target.value });
    }
    const passwordHandler = e => {
        setData({ ...data, password: e.target.value });
    }

    return (
        <LoginWrapper>
            <Logo />
            {/* <LogoImage src={Logo} /> */}
            <LoginStyle>
                <DummyProfile src={DummyProfilePicture} />
                <InputWrapper>
                    <Input
                        type="text"
                        placeholder="Email"
                        change={(e) => emailHandler(e)}
                        icon={<BiEnvelope size={20} />} />
                    <Input
                        type="password"
                        placeholder="Password"
                        change={(e) => passwordHandler(e)}
                        icon={<BiKey size={20} />} />
                </InputWrapper>
                <ForgotPassword link={'/forget-password'}>
                    Forget Password?
                </ForgotPassword>
                <SubmitForm
                    color="#7461C0"
                    link="/">
                    Login
                </SubmitForm>
            </LoginStyle>
        </LoginWrapper>
    );
}

export default Login;
