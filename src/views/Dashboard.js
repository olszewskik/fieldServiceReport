import React from 'react';
import {connect} from 'react-redux'
import MainHeader from '../components/MainHeader/MainHeader';
import Box from '../components/Box/Box';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Dashboard = ({dummyData}) => (
  <StyledWrapper>
    <MainHeader/>
    {dummyData.map(({date, time}) => (
      <Box
        date={date}
        time={time}
      />
    ))}
  </StyledWrapper>
);

const mapStateToProps = ({dummyData}) => ({dummyData});

export default connect(mapStateToProps)(Dashboard);
