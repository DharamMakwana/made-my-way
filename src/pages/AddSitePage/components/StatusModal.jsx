import { createPortal } from 'react-dom'
import { useLayoutEffect } from 'react'

import Lottie from 'lottie-react'

import {Loader} from '../../../components/Loader'
import successAnimationData from '../../../lotties/success'
import failAnimationData from '../../../lotties/fail'

import styled from 'styled-components'

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty
}

const Modal = ({
  isSubmitting,
  modalState,
  setModalState
}) => {
  
  useLockBodyScroll()

  return (
  <Overlay onClick={() => setModalState({
    show: false,
    error: null
  })}>
  <Container>
  { isSubmitting && <Loader/> }
  { !isSubmitting && <Lottie 
  animationData={modalState.error ? failAnimationData:successAnimationData}
  />}
  <p>
  {isSubmitting && 'Make sure you internet connection is strong.This process will take some time.'}
  {!isSubmitting && !modalState.error && 'Details submitted successfully!!!'}
  {!isSubmitting && modalState.error}
  </p>
  </Container>
  </Overlay>
  )
}

export const StatusModal = ({
  isSubmitting,
  modalState,
  setModalState
}) => {
  
  return(
    createPortal(
    <Modal 
    modalState={modalState}
    setModalState={setModalState}
    isSubmitting={isSubmitting}
    />,
    document.getElementById('modals'))
    )
}

const Container = styled.div`
     background: #fff;
     border-radius: 10px;
     padding: 2rem;
     text-align: center;
     width: min(80vw,380px);
     
     p{
       text-align: center;
       font-size: var(--title-text);
       font-weight: var(--medium);
       color: var(--light-text);
     }
`

const Overlay = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     
     width: 100%;
     height: 100vh;
     
     display: grid;
     place-items: center;
     
     z-index: var(--cloud-9);
     background: rgba(0,0,0,.7);
     backdrop-filter: blur(3px);
`