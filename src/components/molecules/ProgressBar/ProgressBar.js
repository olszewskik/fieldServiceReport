import React from 'react';
import {StyledProgressBar, StyledFiller} from "./ProgressBar.styled";

const ProgressBar = ({percentage}) => (
  <StyledProgressBar>
    <StyledFiller style={{width: `${percentage}%`}}>{percentage}%</StyledFiller>
  </StyledProgressBar>
);

export default ProgressBar;
