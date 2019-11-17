import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ActivityCard from '../components/ActivityCard/ActivityCard';
import styled from 'styled-components';
import ActivityThisMonth from "../components/ActivityThisMonth/ActivityThisMonth";
import UserTemplate from "../templates/UserTemplate";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100vw;
  background-color: ${({theme}) => theme.color.dark};
`;


const Dashboard = ({dummyData}) => (
  <UserTemplate>
    <StyledWrapper>
      <ActivityThisMonth/>
      {dummyData.map(({id, date, time, percentage}) => (
        <ActivityCard
          id={id}
          date={date}
          time={time}
          percentage={percentage}
          key={id}
        />
      ))}
    </StyledWrapper>
  </UserTemplate>
);

ActivityCard.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}

const mapStateToProps = ({dummyData}) => ({dummyData});

export default connect(mapStateToProps)(Dashboard);
