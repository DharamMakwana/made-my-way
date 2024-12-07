import { useState } from 'react'

import {Outlet} from 'react-router-dom'

import {AvatarBox} from '../components/AvatarBox'
import {BottomNavigation} from '../components/BottomNavigation'

import {AllForms} from '../form-component/AllForms'



import styled from 'styled-components'

export const BaseLayout = () => {
  
  const [openForms,setOpenForms] = useState(false)
  
  return(
    <>
    <AvatarBox 
    setOpenForms={setOpenForms}/>
    
    <AppWrapper>
    <Outlet />
    </AppWrapper>
    
    <BottomNavigation />
    
    {
      openForms 
      && 
      <AllForms 
      setOpenForms={setOpenForms}/>
    }
    </>
    )
}

const AppWrapper = styled.div`
     padding: .25rem .5rem;
     padding-bottom: 6rem;
     overflow: hidden;
     
     @media(min-width: 1000px){
     padding: 1.5rem 6rem;
    }
`