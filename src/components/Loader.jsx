import React from 'react';
import styled from 'styled-components';

export const Loader = ({size,color,screencenter=false}) => {
  
  if (screencenter) {
  return (
  <StyledSpinner
  size={size}
  color={color}
  style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }}
  viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    />
  </StyledSpinner>
  )
  }
  
  return (
  <StyledSpinner
  size={size}
  color={color}
  viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    />
  </StyledSpinner>
  )
}

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: ${({size})=> size||'22px'};
  
  & .path {
    stroke: ${({color})=> color||'rgb(0,0,0)'};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

