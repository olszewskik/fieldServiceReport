import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {routes} from "routes";
import Heading from "../../atoms/Heading/Heading";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.lightGrey};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
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
    <Link to={routes.home}>Home</Link>
    <Link to={routes.reports}>Reports</Link>
  </StyledMenu>
);

export default Menu;
