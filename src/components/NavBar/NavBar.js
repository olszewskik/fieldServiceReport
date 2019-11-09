import React from 'react';
import styled from 'styled-components';
import Heading from "../atoms/Heading/Heading";

const StyledWrapper = styled.div`
  display: flex;
`;

const NavBar = () => (
  <StyledWrapper>
    <Heading>Test 1</Heading>
    <Heading big>Test 2</Heading>
  </StyledWrapper>
);

export default NavBar;
