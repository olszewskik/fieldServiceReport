import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.color.gradientPrimary};
  height: 80px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  //justify-content: space-around;
  padding-left: 10px;
  margin-bottom: 15px;
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

const Box = () => (
  <StyledWrapper>
    <DateInfo>03/11</DateInfo>
    <DetailsForDay>
      <InnerWrappwer>
        <DetailsHeader>H</DetailsHeader>
        <DetailsValue>3.25</DetailsValue>
      </InnerWrappwer>
      <InnerWrappwer>
        <DetailsHeader>O</DetailsHeader>
        <DetailsValue>1</DetailsValue>
      </InnerWrappwer>
      <InnerWrappwer>
        <DetailsHeader>F</DetailsHeader>
        <DetailsValue>0</DetailsValue>
      </InnerWrappwer>
      <InnerWrappwer>
        <DetailsHeader>P</DetailsHeader>
        <DetailsValue>2</DetailsValue>
      </InnerWrappwer>
    </DetailsForDay>
  </StyledWrapper>
);

export default Box;
