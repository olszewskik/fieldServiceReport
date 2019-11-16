import React from 'react';
import styled from 'styled-components';
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import clockIcon from '../../../assets/icons/clock-regular.svg';
import calendarIcon from '../../../assets/icons/calendar-alt-regular.svg';
import chartIcon from '../../../assets/icons/chart-line-solid.svg';
import settingIcon from '../../../assets/icons/cog-solid.svg';
import plusIcon from '../../../assets/icons/plus-solid.svg';

const StyledMenu = styled.nav`
position: fixed;
  bottom: 0;
  padding: 10px 10px 20px 10px; 
  width: 100vw;
  height: 80px;
  background-color: ${({theme}) => theme.color.light};
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const AddButtonIcon = styled(ButtonIcon)`
  background-color: ${({theme}) => theme.color.green};
  border-radius: 100%;
  position: relative;
  bottom: 20px;
  transform: scale(1.8);
  border: 6px solid ${({theme}) => theme.color.light};
`;

const Menu = () => (
  <StyledMenu>
    <StyledLinksList>
      <li>
        <ButtonIcon icon={calendarIcon}/>
      </li>
      <li>
        <ButtonIcon icon={chartIcon}/>
      </li>
      <li>
        <AddButtonIcon icon={plusIcon}/>
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
