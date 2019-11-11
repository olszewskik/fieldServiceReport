import React from 'react';
import {StyledProgressBar, StyledFiller } from "./ProgressBar.styled";

const ProgressBar = (props) => (
  <StyledProgressBar>
    <StyledFiller style={{ width: `${props.percentage}%` }}>{props.percentage}%</StyledFiller>
  </StyledProgressBar>
);

export default ProgressBar;
