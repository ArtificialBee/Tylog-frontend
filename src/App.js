import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { useTheme } from 'styled-components/macro';

//Pages
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/LogIn/Login'
import SignUp from './Pages/SignUp/SignUp'

//Components

const AppStyle = styled.div`
  /* background:red; */
  background:${({ background }) => background};
  width:100vw;
  height:100vh;
  `;

const Content = styled.div`
  max-width:1440px;
  height:100%;
  margin:0 auto;
`;


function App() {


  const theme = useTheme();
  const [bg, setBg] = useState(theme.backgrounds.default)

  return (
    <AppStyle background={bg}>
      <Content>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </Content>
    </AppStyle>
  );
}

export default App;
