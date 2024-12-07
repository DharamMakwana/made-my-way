import {NavLink} from 'react-router-dom'

import Home from '../assets/icons/Home'
import Search from '../assets/icons/Search'
import Plus from '../assets/icons/Plus'
import Bookmark from '../assets/icons/Bookmark'
import Setting from '../assets/icons/Setting'

import styled from 'styled-components'

const navigationData = [
  {
    ID: 0,
    name: 'Home',
    icon: <Home/>,
    to: '/'
  },
  {
    ID: 1,
    name: 'Search',
    icon: <Search/>,
    to: '/search'
  },
  {
    ID: 2,
    name: 'Add',
    icon: <Plus/>,
    to: '/addsite'
  },
  {
    ID: 3,
    name: 'Bookmarks',
    icon: <Bookmark/>,
    to: '/myuploads'
  },
  {
    ID: 4,
    name: 'Settings',
    icon: <Setting/>,
    to: '/setting'
  }
  ]

export const BottomNavigation = () =>
{
	const content = navigationData.map(({ID,name,icon,to},i) => {
      return (
      <li key={ID}>
      <NavLink 
      style={{display:'grid',placeItems:'center'}}
      className={({isActive}) => isActive ? 'active':''}
      to={to}>
      {icon}
      </NavLink>
      </li>
      )
    })
  
  return(
 
    <BottomNavStyle>
    {content}
    </BottomNavStyle>
  
    )
}


const BottomNavStyle = styled.ul`
    
      position: fixed;
      bottom: 0;
      left: 0;
      
      width: 100%;
      
      max-width: 420px;
      
      list-style: none;
      padding: 8px;
      
      z-index: var(--cloud-5);
      background: #fff;
      
      display: flex;
      justify-content:space-between;
      align-items: center;
      
      border: 1px solid #dbdbd8;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      
      transition: all .5s ease;
      
      &::before{
      content: '';
      position: absolute;
      top: 50%;
      right: 3px;
      transform: translateY(-50%);
      height: 10%;
      width: 6px;
      background: #737373;
      border-radius: 1rem;
      
      display: none;
      }
    
      li{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
      height: 35px;
      width: 35px;
      
      border-radius: 50%;
      
      .active{
        transform: translateY(-6px);
        
         &::after{
         
        content: '';
        position: absolute;
        
        transform: translateY(20px);
        
        height: 7px;
        width: 7px;
        border-radius: 50%;
        
        background: var(--primary-color);
      }
      
      }
    }
    
      @media(min-width: 1000px){
      
      flex-direction: column;
      width: 5%;
      
      border-radius: 2.25rem;
      
      padding: 1rem;
      
      
     	top: 50%;
     	left: 5px;
     	transform:translate(-90%,-50%);
     	
     	&:hover{
     	transform: translate(0%,-50%);
     	}
     
     	
     	&::before{
     	display: block;
     	}
`