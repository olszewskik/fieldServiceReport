import React from 'react';
import styled from 'styled-components';
import ProgressBar from "../molecules/ProgressBar";
import Paragraph from "../atoms/Paragraph/Paragraph";


const StyledWrapper = styled.div`
  background: ${({theme}) => theme.color.gradientPrimary};
  height: 80px;
  width: 90vw;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  box-shadow: 0px 10px 15px -8px rgba(0,0,0,0.75);
`;

const StyledDate = styled.div`
  background: ${({theme}) => theme.color.gradientAdd};
  color: ${({theme}) => theme.color.bright};
  height: 40px;
  width: 40px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
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
      <Paragraph>{time}</Paragraph>
    </Total>
  </StyledWrapper>
);

export default Box;
