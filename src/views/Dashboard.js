import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';
import Box from '../components/Box/Box';
import styled from 'styled-components';
import NavBar from "../components/NavBar/NavBar";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Dashboard = () => (
  <>
    <StyledWrapper>
      <NavBar/>
      <MainHeader/>
      <Box date='06/11'/>
      <Box date='04/11'/>
      <Box date='03/11'/>
    </StyledWrapper>
  </>
);

export default Dashboard;
