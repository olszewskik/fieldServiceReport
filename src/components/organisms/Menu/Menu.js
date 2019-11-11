import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Heading from "../../atoms/Heading/Heading";

const StyledMenu = styled.nav`
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
  }
`;

const Menu = () => (
  <StyledMenu>
    <Heading>Menu</Heading>
    <Link to={'/'}>Home</Link>
    <Link to={'/reports'}>Reports</Link>
  </StyledMenu>
);

export default Menu;
