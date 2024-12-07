import {useRef} from 'react'
import { useRippleEffect } from '../hooks/useRippleEffect'

import {Loader} from './Loader'

import {motion} from 'framer-motion'

import styled from 'styled-components'

const ButtonSizeSheet = {
  sm: {
    padding: '0 20px',
    fontsize: '12px',
    height: '40px'
  },
  md: {
    padding: '0 24px',
    fontsize: '14px',
    height: '44px'
  },
  lg: {
    padding: '0 28px',
    fontsize: '16px',
    height: '48px'
  },
}

const ButtonStyleSheet = {
  primary: {
    background:'var(--primary-color)',
    color:'#fff',
    rippleColor:'rgba(255,255,255,.3)',
    boxShadow: 'none'
  },
  secondary: {
    background:'#fff',
    color:'var(--dark-text)',
    rippleColor:'rgba(0,0,0,.2)',
    boxShadow: 'inset #d8d8da 0 0  0 1.5px'
  },
  ghost: {
    background:'#fff',
    color:'var(--primary-color)',
    rippleColor:'rgba(48,139,172,.3)',
    boxShadow: 'none'
  },
}

const SoulButtonStyle = styled.button`
  
     max-width: 360px;
     height: ${
     ({size})=>
     (ButtonSizeSheet[size].height)
     };
     
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${({icon})=> !icon ? '0px':'10px'};
     
     background: ${
     ({variant})=>
     (ButtonStyleSheet[variant].background)
     };
     color: ${
     ({variant})=>
     (ButtonStyleSheet[variant].color)
     };
     border: none;
     padding: ${
     ({size})=>
    (ButtonSizeSheet[size].padding)
     };
     line-height: 120%;
     border-radius: var(--${({size})=>size}-rad);
     font-size: ${
     ({size})=>
     (ButtonSizeSheet[size].fontsize)
     };
     font-weight: var(--medium);
     overflow: hidden;
     transition: transform .75s;
     
      box-shadow: ${
     ({variant})=>
     (ButtonStyleSheet[variant].boxShadow)
     };
  
     span{
       display: grid;
     }
     
     &:active{
       transform: translateY(5px);
     }
    
     &:disabled{
       transform: scale(1);
       opacity: .7;
     }
`

export const Button = ({
  children,
  variant='primary',
  size='lg',
  onClick,
  icon,
  style,
  loading,
  rippleColor,
  form,
  disabled
}) => {
  
  const ripple = useRef()
  
  useRippleEffect(ripple,
  {
    color: rippleColor || ButtonStyleSheet[variant].rippleColor
  })

  return(
    <SoulButtonStyle 
    ref={ripple}
    
    variant={variant}
    size={size}
    style={style}
    
    onClick={onClick}
    
    loading={loading}
    disabled={loading || disabled}  
    
    icon={icon}
    form={form}
    >
    <span>
    {loading?'':icon}
    </span>
  
    {loading 
    ? 
    <Loader 
    size={ButtonSizeSheet[size].fontsize}
    color={ButtonStyleSheet[variant].color}
    />
    :
    children}
  
    </SoulButtonStyle>
    )
}