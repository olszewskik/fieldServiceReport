import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ActivityCard from '../components/ActivityCard/ActivityCard';
import styled from 'styled-components';
import ActivityThisMonth from "../components/ActivityThisMonth/ActivityThisMonth";
import UserTemplate from "../templates/UserTemplate";
import ButtonIcon from "../components/atoms/ButtonIcon/ButtonIcon";
import addIcon from '../assets/icons/plus-solid.svg'
import MainHeader from "../components/MainHeader/MainHeader";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100vw;
`;

const StyledAddIcon = styled(ButtonIcon)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: darkorange;
`;


const Dashboard = () => (
  <UserTemplate>
    <StyledWrapper>
      <MainHeader/>
      <ActivityThisMonth/>

      <StyledAddIcon icon={addIcon} />
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
