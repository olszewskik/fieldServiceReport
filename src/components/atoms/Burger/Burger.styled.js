import styled from 'styled-components';

export const StyledBurger = styled.button`
  padding: 10px;
  display: inline-block;
  background: transparent;
  cursor: pointer;
  border: 0;
  margin: 10px;
  position: fixed;
`;

export const StyledBurgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

export const StyledBurgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${({theme, isOpen}) => (isOpen ? 'transparent' : theme.color.bright)};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .1s .2s ease-in-out;
  
    &::before, ::after{
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({theme}) => (theme.color.bright)};
    position: absolute;
    left: 0;
    transition: transform .2s .2s ease-in-out;
    }
    
    &::before {
      top: 10px;
      transform: ${({isOpen}) => (isOpen ? 'translateY(-10px) rotate(-45deg)' : 'translateY(0) rotate(0)')};
    }
    
    &::after {
      top: -10px;
      transform: ${({isOpen}) => (isOpen ? 'translateY(10px) rotate(45deg)' : 'translateY(0) rotate(0)')};
    }
`;
