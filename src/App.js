import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { useTheme } from 'styled-components';

//Pages
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/LogIn/Login'
import SignUp from './Pages/SignUp/SignUp'

//Components

const AppStyle = styled.div`
  background:${({ background }) => background};

`;

const Content = styled.div`
  max-width:1440px;
  margin:0 auto;
`;


function App() {

  const theme = useTheme();

  useEffect(() => {
    console.log("pozvala sam seeeeeeee!!!!!");
  }, [window.location.pathname]);

  return (
    <AppStyle>
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
