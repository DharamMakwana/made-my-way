import styled,{keyframes} from 'styled-components'

export const SplashScreen = ({allTheWayUp = true}) => {

  return (
  <SplashScreenWrapper 
  allTheWayUp={allTheWayUp}
  >
  <Spinner />
  </SplashScreenWrapper>
  )
  
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SplashScreenWrapper = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     
     width: 100%;
     height: 100%;
     
     display: grid;
     place-items: center;
     
     background: #fff;
     
     z-index: ${({allTheWayUp}) => allTheWayUp ? 'var(--cloud-9)':'var(--cloud-3)'};
`
const Spinner = styled.div`
    

     border: 2px solid rgba(13,118,193,.2);
     border-top: 2px solid var(--primary-color);
     border-radius: 50%;
        
     width: 35px;
     aspect-ratio: 1/1;

     animation: ${rotate} .25s linear infinite;
`