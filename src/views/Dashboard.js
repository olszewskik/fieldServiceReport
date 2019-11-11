import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MainHeader from '../components/MainHeader/MainHeader';
import Box from '../components/Box/Box';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: ${({theme}) => theme.color.dark};
  min-height: 100vh;
`;

const Dashboard = ({dummyData}) => (
  <StyledWrapper>
    <MainHeader/>
    {dummyData.map(({date, time, percentage}) => (
      <Box
        date={date}
        time={time}
        percentage={percentage}
        key={date}
      />
    ))}
  </StyledWrapper>
);

Box.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}

const mapStateToProps = ({dummyData}) => ({dummyData});

export default connect(mapStateToProps)(Dashboard);
