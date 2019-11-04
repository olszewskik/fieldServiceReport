import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.color.gradientAdd};
  height: 200px;
  width: 100vw;
  border-radius: 0 0 15px 15px;
  margin-bottom: 20px;
`;

const MainHeader = () => (
  <StyledWrapper>
    <NavBar />
  </StyledWrapper>
);

export default MainHeader;
