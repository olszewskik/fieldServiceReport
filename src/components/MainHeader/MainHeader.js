import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';
import Paragraph from "../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.color.gradientAdd};
  height: 200px;
  width: 95vw;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 10px 28px 2px rgba(0,0,0,0.4);
`;

const MainHeader = () => (
  <StyledWrapper>
    <NavBar />
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Paragraph>
  </StyledWrapper>
);

export default MainHeader;
