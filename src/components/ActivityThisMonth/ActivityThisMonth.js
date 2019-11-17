import React, {Component} from 'react';
import styled from 'styled-components';
import Heading from "../atoms/Heading/Heading";
import Paragraph from "../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  background: deeppink;
  width: 100vw;
  border-radius: 25px 25px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  box-shadow: 0px 10px 15px -8px rgba(0,0,0,0.75);
  padding-top: 30px;
`;


const ActivityThisMonth = () => (
  <StyledWrapper>
    <Paragraph>Activity this Month</Paragraph>
    <Heading big>54 h 30 m</Heading>
  </StyledWrapper>
);


export default ActivityThisMonth;
