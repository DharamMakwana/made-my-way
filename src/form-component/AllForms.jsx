import {useState} from 'react'

import {FormWithThirdParties} from './FormWithThirdParties'
import {FormWithEmailSignUp} from './FormWithEmailSignUp'
import {FormWithEmailSignIn} from './FormWithEmailSignIn'

import { Overlay } from '../layout-components/Overlay'


export const AllForms = ({setOpenForms}) => {
  
  const [state,setState] = useState({
    type:'thirdParties',
    visible:true
  })
  
  
  const closeForm = () => setOpenForms(false)
  
  const openSignUp = () => setState(p => ({
    ...p,
    type:'signUp',
    visible:true}))
  
  const openSignIn = () => setState(p => ({
    ...p,
    type:'signIn',
    visible:true}))
    
  const openThirdParty = () => setState(p => ({
    ...p,
    type:'thirdParties',
    visible:true}))
    
	const animateVariants = {
  	
  initial:{ y: '100%' },
  animate:{ y: '0%'}
  
  }
  
  let content;
    
  if(state.type==='thirdParties' && state.visible)
    content = <FormWithThirdParties 
      formDisplayMethods={{
        closeForm,
        openSignUp,
      }}
      options={animateVariants}
      />
    
  if(state.type==='signIn' && state.visible)
    content = <FormWithEmailSignIn
		options={animateVariants}
    formDisplayMethods={{
        closeForm,
        openSignUp,
        openThirdParty
      }}/>
    
  if(state.type==='signUp' && state.visible)
    content = <FormWithEmailSignUp 
  	options={animateVariants}

    formDisplayMethods={{
        closeForm,
        openSignIn,
        openThirdParty,
      }}/>
 
    return(
    <>
    <Overlay />
    {content}
    </>
    )
  
}