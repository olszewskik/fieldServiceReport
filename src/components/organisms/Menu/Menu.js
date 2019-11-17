import React from 'react';
import styled from 'styled-components';
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import clockIcon from '../../../assets/icons/clock-regular.svg';
import calendarIcon from '../../../assets/icons/calendar-alt-regular.svg';
import chartIcon from '../../../assets/icons/chart-line-solid.svg';
import settingIcon from '../../../assets/icons/cog-solid.svg';
import plusIcon from '../../../assets/icons/plus-solid.svg';
import {Link} from "react-router-dom";

const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-60px')};
  height: 100vh;
  width: 60px;
  background-color: ${({theme}) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Menu = ({isOpen}) => (
  <StyledMenu isOpen={isOpen}>
    <StyledLinksList>
      <li>
        <ButtonIcon icon={calendarIcon}/>
      </li>
      <li>
        <Link to={'/reports'}>
          <ButtonIcon icon={chartIcon}/>
        </Link>
      </li>
      <li>
        <ButtonIcon icon={plusIcon}/>
      </li>
      <li>
        <ButtonIcon icon={clockIcon}/>
      </li>
      <li>
        <ButtonIcon icon={settingIcon}/>
      </li>
    </StyledLinksList>
  </StyledMenu>
);


export default Menu;
