import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
position: fixed;
  bottom: 0;
  padding: 25px 0;
  width: 100vw;
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Menu = () => (
  <StyledMenu>
    <StyledLinksList>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
    </StyledLinksList>
  </StyledMenu>
);

export default Menu;
