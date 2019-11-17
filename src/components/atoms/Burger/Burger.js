import React from 'react';
import {StyledBurger, StyledBurgerBox, StyledBurgerInner} from "./Burger.styled";

const Burger = ({isOpen, setOpen}) => (
  <StyledBurger onClick={() => setOpen()}>
    <StyledBurgerBox>
      <StyledBurgerInner isOpen={isOpen}/>
    </StyledBurgerBox>
  </StyledBurger>
);

export default Burger;
