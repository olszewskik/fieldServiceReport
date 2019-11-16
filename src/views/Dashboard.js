import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MainHeader from '../components/MainHeader/MainHeader';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import styled from 'styled-components';
import Menu from "../components/organisms/Menu/Menu";
import ButtonIcon from "../components/atoms/ButtonIcon/ButtonIcon";
import clockIcon from 'assets/icons/clock-regular.svg';
import ActivityThisMonth from "../components/ActivityThisMonth/ActivityThisMonth";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: ${({theme}) => theme.color.dark};
  min-height: 100vh;
`;

const InnerWrapper = styled.div`
  margin: 20px;
`;

const Dashboard = ({dummyData}) => (
  <StyledWrapper>
    <MainHeader/>
    <ActivityThisMonth/>
    <InnerWrapper>
      <ButtonIcon icon={clockIcon}/>
    </InnerWrapper>
    {dummyData.map(({id, date, time, percentage}) => (
      <ActivityCard
        id={id}
        date={date}
        time={time}
        percentage={percentage}
        key={id}
      />
    ))}
    <Menu/>
  </StyledWrapper>
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
