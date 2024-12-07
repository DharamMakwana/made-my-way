import { useState,useEffect } from 'react'

export const useRippleEffect = (element,config) => {
  
  const {color} = config

  const setClassToAnElement = () => {
    element.current.classList.add('ripple-container')
  }
  
  const setRippleVars = (e) => {
    element.current.style.setProperty('--ripple-left',`${e.offsetX}px`)
    element.current.style.setProperty('--ripple-top',`${e.offsetY}px`)
    element.current.style.setProperty('--ripple-color',color)
  }
  
  useEffect(()=>{
    
    const onClick = (e) => {
      element.current.classList.remove('active')
      setRippleVars(e);
      element.current.classList.add('active')
    }
    
    setClassToAnElement()
    
    element.current.addEventListener("click", onClick);
    
    const cleanupRef = element.current;

    return () => {
      cleanupRef.removeEventListener('click',onClick)
    }
  },[color])
  
}