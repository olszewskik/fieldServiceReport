import React from 'react';
import styled from 'styled-components';
import ProgressBar from "../molecules/ProgressBar";


const StyledWrapper = styled.div`
  background: ${({theme}) => theme.color.gradientPrimary};
  height: 80px;
  width: 90vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 10px 15px -8px rgba(0,0,0,0.75);
`;

const StyledDate = styled.div`
  background: ${({theme}) => theme.color.gradientAdd};
  color: ${({theme}) => theme.color.bright};
  height: 50px;
  width: 50px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Total = styled.div`
  color: ${({theme}) => theme.color.bright};
  font-weight: ${({theme}) => theme.fontWeight.bold};;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
`;

const Box = ({date, time, percentage}) => (
  <StyledWrapper>
    <StyledDate>{date}</StyledDate>
    <ProgressBar percentage={percentage}/>
    <Total>
      <h4>Total:</h4>
      {time}
    </Total>
  </StyledWrapper>
);

export default Box;
