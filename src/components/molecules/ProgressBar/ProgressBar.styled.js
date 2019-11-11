import styled from 'styled-components'

export const StyledProgressBar = styled.div`
  position: relative;
  height: 18px;
  width: 180px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.color.bright};
  box-shadow: 0px 10px 15px -8px rgba(0,0,0,0.75);
`;

export const StyledFiller = styled.div`
  background-color: ${({theme}) => theme.color.darkGrey};
  height: 100%;
  border-radius: inherit;
  color: ${({theme}) => theme.color.bright};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.xs};
`;

