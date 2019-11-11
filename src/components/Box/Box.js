import React, {Component} from 'react';
import styled from 'styled-components';
import {renderChildren} from "redux-form/lib/ReduxFormContext";

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.color.gradientPrimary};
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

const DateInfo = styled.div`
  background: ${({ theme }) => theme.color.gradientAdd};
  color: ${({ theme }) => theme.color.bright};
  height: 50px;
  width: 50px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailsForDay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  justify-items: center;
  padding-left: 15px;
`;

const InnerWrappwer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailsHeader = styled.div`
  color: ${({ theme }) => theme.color.bright};
`;

const DetailsValue = styled.div`
  color: ${({ theme }) => theme.color.lightGrey};
`;

const Total = styled.div`
  color: ${({ theme }) => theme.color.bright};
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Progress = styled.div`

`;

const Box = (props) => (
      <StyledWrapper>
        <DateInfo>{props.date}</DateInfo>
        <Total>{props.time}</Total>
        <Progress/>
      </StyledWrapper>
    );

export default Box;
