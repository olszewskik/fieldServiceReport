import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const UserTemplate = ({children}) => (
  <>
    <StyledGridWrapper>
      {children}
    </StyledGridWrapper>
  </>
);

UserTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserTemplate;





