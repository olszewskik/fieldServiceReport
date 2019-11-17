import React from 'react';
import styled from 'styled-components';
import Heading from "../atoms/Heading/Heading";

const StyledWrapper = styled.div`
  width: 100vw;
  margin-top: 38px;
`;

const actualDate = Date.now();

const MainHeader = () => (
  <StyledWrapper>
    <Heading>Hello Kamil</Heading>
    <Heading big>{actualDate}</Heading>
  </StyledWrapper>
);

export default MainHeader;
