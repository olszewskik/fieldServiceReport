import React from 'react';
import styled from 'styled-components';
import Heading from "../atoms/Heading/Heading";

const StyledWrapper = styled.div`

`;

const MainHeader = () => (
  <StyledWrapper>
    <Heading>Hello Kamil L</Heading>
    <Heading big>Hello Kamil XL</Heading>
  </StyledWrapper>
);

export default MainHeader;
