import React from 'react';
import styled from 'styled-components';
import Heading from "../atoms/Heading/Heading";

const StyledWrapper = styled.div`
  background: ${({theme}) => theme.color.gradientAdd};
  height: 200px;
  width: 95vw;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 10px 28px 2px rgba(0,0,0,0.4);
  color: ${({theme}) => theme.color.bright};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainHeader = () => (
  <StyledWrapper>
    <Heading>H 54.20</Heading>
  </StyledWrapper>
);

export default MainHeader;
