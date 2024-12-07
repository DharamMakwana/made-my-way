import { useErrorContext } from '../context/ErrorContext'
import { createPortal } from 'react-dom'

import { Alert as MantineAlert } from '@mantine/core'

import Danger from '../assets/icons/Danger'
import Ticksquare from '../assets/icons/Ticksquare'

import styled from 'styled-components'

export const Alert = () => {
  
  const {
    resetAlert,
    errorAlert,
  } = useErrorContext()
  
  if (errorAlert?.type) 
  return (
    createPortal(
    <Overlay>
    <MantineAlert
    title={errorAlert.heading}
    styles={()=>({
      root:{
        width: 'min(90%,400px)',
        position: 'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
      }
    })}
    radius="lg"
    onClose={resetAlert}
    withCloseButton 
    variant="filled"
    icon={errorAlert.type==="success"?<Ticksquare/>:<Danger/>}
    color={errorAlert.type==="success"?"green":"red"}
    >
    {errorAlert.message}
    </MantineAlert>
    </Overlay>
    ,
    document.getElementById('modals'))
    )

  
  return (null)
  
}

const Overlay = styled.div`
     position: absolute;
     inset: 0;
     width: 100vw;
     height: 100vh;
     background: rgba(0,0,0,.7);
     backdrop-filter: blur(9px);
     z-index: var(--cloud-9);
`