import { useAuthContext } from '../context/AuthContext'
import Puzzle from '../assets/illustrations/Puzzle'
import styled from 'styled-components'

export const ProtectedRoute = ({children}) => {
  const userInfo = useAuthContext()
  
  if (userInfo) {
  return (
    <>
    {children}
    </>
    )
  }
  
  return (
    <Container>
    <Puzzle />
    <p>
    Click {<ColorText>Join Us!</ColorText>} to access this content
    </p>
    </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding: .5rem;
    height: 80vh;
    
    p{
      font-size: var(--title-text);
      font-weight: var(--medium);
    }
`

const ColorText = styled.p`
     font-size: var(--title-text);
     font-weight: var(--medium);
     color: var(--primary-color);
     display: inline;
`