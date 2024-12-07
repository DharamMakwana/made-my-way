import styled,{ keyframes } from 'styled-components'


const rainbow = keyframes`
0% {
    background-size: 300%;
    background-position: -9em 1em;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 57%;
    background-position: 0 0;
  }
`

export const GradientText = styled.p`

	font-size: 2rem;
	font-weight: 500;
	
	background: #CA4246;
  background-color: #CA4246;
  background: conic-gradient(
    #CA4246 16.666%, 
    #E16541 16.666%, 
    #E16541 33.333%, 
    #F18F43 33.333%, 
    #F18F43 50%, 
    #8B9862 50%, 
    #8B9862 66.666%, 
    #476098 66.666%, 
    #476098 83.333%, 
    #A7489B 83.333%);
 
  background-size: 57%;
  background-repeat: repeat;
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  
  animation: ${rainbow} 5s infinite;

`