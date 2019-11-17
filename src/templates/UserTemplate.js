import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from "../components/organisms/Menu/Menu";
import Burger from "../components/atoms/Burger";


const StyledWrapper = styled.div`
  padding-left: ${({isOpenMenu}) => (isOpenMenu ? '60px' : '0px')};
`;


class UserTemplate extends Component {
  state = {
    isOpenMenu: false,
  };

  toggleOpenMenu = () => {
    this.setState(prevState => ({
      isOpenMenu: !prevState.isOpenMenu,
    }));
  };

  render() {
    const {children} = this.props;
    const {isOpenMenu} = this.state;

    return (
      <StyledWrapper isOpenMenu={isOpenMenu}>
        <Burger
          setOpen={this.toggleOpenMenu}
          isOpen={isOpenMenu}
        />
        <Menu isOpen={isOpenMenu} />
        {children}
      </StyledWrapper>
    )
  }
}

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;
