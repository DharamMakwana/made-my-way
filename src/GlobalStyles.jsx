import { 
  createGlobalStyle,
  keyframes 
} from 'styled-components'

const ripple = keyframes`
     0% {
     transform: scale(1);
     opacity: 1;
     }
     33.33% {
     transform: scale(20);
      opacity: 0.5;
     }
     100% {
     transform: scale(40);
     opacity: 0;
     }
`

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      font-family: 'Poppins', sans-serif;
    }
    html{
      font-size: 62.5%;
    }
    body{
      position: relative;
      z-index: 0;
    }
    :root{
    
      --primary-color: #0d76c1;
      
      --sm-rad: 7px;
      --md-rad: 8px;
      --lg-rad: 10px;
      
      --caption-text: .694rem;
      --body-text: .883rem;
      --para-text: 1rem;
      --title-text: 1.2rem;
      --heading-text: 1.45rem;
      --pagetitle-text: 1.728rem;
      
      --dark-text: rgba(0,0,0,.85);
      --light-text: rgba(0,0,0,.6);
      --lighter-text: rgba(0,0,0,.5);
      
      --bold: 700;
      --medium: 500;
      --normal: 400;
      --light: 300;
      
      --cloud-9: 999;
      --cloud-7: 799;
      --cloud-5: 599;
      --cloud-3: 399;
      --cloud-1: 99;
    
    }
    
    
    .ripple-container{

     --ripple-color: #fff;
     --ripple-left: 0px;
     --ripple-top: 0px;
    
      position: relative;
      overflow: hidden;
    }
    
     .ripple-container::after{
        position: absolute;
        background: var(--ripple-color);
        content: '';
        height: 20px;
        width: 20px;
        opacity: 0;
        border-radius: 50%;
        left: var(--ripple-left);
        top: var(--ripple-top);
      }
    
    .ripple-container.active::after{
      animation: ${ripple} .75s linear forwards;
    }
    
    @media(min-width: 1000px){
    html{
    	font-size: 90%;
    }
    }
`

export default GlobalStyles