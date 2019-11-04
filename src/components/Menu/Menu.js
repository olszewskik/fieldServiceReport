import React from 'react';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.color.lightGrey};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.color.bright};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.color.violet};
    }
  }
`;

const Menu = () => (
  <StyledMenu>
    <a href="/">
      <span aria-hidden="true">💁🏻‍♂️</span>
      About us
    </a>
    <a href="/">
      <span aria-hidden="true">💸</span>
      Pricing
    </a>
    <a href="/">
      <span aria-hidden="true">📩</span>
      Contact
    </a>
  </StyledMenu>
);

export default Menu;
