import React, {Component} from 'react';
import {StyledBurger, StyledBurgerBox, StyledBurgerInner} from "./Burger.styled";

class Burger extends Component {
  state = {
    isOpen: false
  };

  handleBurgerToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const {isOpen} = this.state;

    return (
      <StyledBurger onClick={this.handleBurgerToggle}>
        <StyledBurgerBox>
          <StyledBurgerInner isOpen={isOpen}/>
        </StyledBurgerBox>
      </StyledBurger>
    )
  }
};

export default Burger;
