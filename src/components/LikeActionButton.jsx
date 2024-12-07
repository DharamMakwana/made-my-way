import {useState} from 'react'
import { useAuthContext } from '../context/AuthContext'

import { 
  doc,
  updateDoc,
  increment,
  arrayUnion,
  arrayRemove 
} from "firebase/firestore";
import { db } from "../firebaseConfig";

import HeartFill from '../assets/icons/HeartFill'

import styled,{keyframes,css} from 'styled-components'

const updateLikesByArray = (id,uid,state) => {
    updateDoc(doc(db, "Places",id),{likesby: state ? arrayRemove(uid) : arrayUnion(uid)})
    .then(res => console.log(res))
    .catch(e => console.log(e))
}

const updateLikesCounter = (id,bool) => {
    updateDoc(
    doc(db,'Places',id),
    {likescounter:increment(bool?-1:1)})
    .then(res => res)
    .catch(e => console.log(e))
}

const padNumberWithZero = (num) => num<10 ? '0'+num:''+num
  

export const LikeActionButton = ({
  initialState=false,
  place_id,
  likescounter
}) =>
{
  const [liked,setLiked] = useState(initialState)
  const [likesCount,setLikesCount] = useState(likescounter)
  
  const userInfo = useAuthContext()

  const handleClick = async () => {
    
    if(!userInfo)
    await updateLikesCounter(place_id,liked)
    
    if(userInfo)
    await Promise.all([
      updateLikesCounter(place_id,liked),
      updateLikesByArray(place_id,userInfo.uid,liked)
      ])
    
    setLiked(!liked)
    setLikesCount(prev => {
      if(liked)
      return prev-1
      else
      return prev+1
    })
  }
  
  return(
    <>
    <AnimateLayer 
    onClick={handleClick}
    liked={liked}
    >
    <HeartFill
    liked={liked}/>
    </AnimateLayer>
    <span 
    style={{
    marginLeft:'1px',
    fontSize: 'var(--title-text)',
    fontWeight: 'var(--medium)',
    color: 'var(--light-text)'
    }}>
    {padNumberWithZero(likesCount)}
    </span>
    </>
    )
  
}

const iconPop = keyframes`
  0% {
  transform: scale(0.45);
  }
	50% {
	transform: scale(1.4);
	}
	100% {
	transform: scale(1);
	}
`
const ringPop = keyframes`
 0% {
		transform: scale(2);
		box-shadow: 0 0 0 4px #ee3737;
		opacity: .2;
	}

	100% {
		box-shadow: 0 0 0 1px #ee3737;
		transform: scale(1);
		opacity: 1;
	}
`

const ringPop2 = keyframes`
    0% {
		box-shadow: 0 0 2px 2px salmon;
		transform: scale(1);
		opacity: 1;
	}

	100% {
		box-shadow: 0 0 1px 1px transparent;
		transform: scale(4);
		opacity: .2;
	}
`

const AnimateLayer = styled.span`
     position: relative;
     
     display: grid;
     place-items: center;
     
     z-index: var(--cloud-3);
     
     width: 25px;
     height:25px;
     
     ${({liked}) => liked && css`animation: ${iconPop} .5s ease-out;`}
     
     &::before{
      content: '';
    	position: absolute;
    	
    	width: 30px;
    	height:30px;
    	
    	box-shadow: 0 0 0 3px #ee3737;
    	opacity: 0;
      transform: scale(2);
    	border-radius: 50%;
     
     ${({liked}) => liked && css`animation: ${ringPop} .5s linear;`}
     }
     
     &::after{
      content: '';
    	position: absolute;
    	pointer-events: none;
    	
    	width: 30px;
    	height:30px;
    	
      border-radius: 50%;
    	box-shadow: 0 0 0 0 transparent;
    	opacity: 0;
    	transform: scale(1);
    	
    	${({liked}) => liked && css`animation: ${ringPop2} .75s linear;`}
     }
`