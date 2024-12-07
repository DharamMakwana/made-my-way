import {useState} from 'react'
import { useAuthContext } from '../context/AuthContext'

import { 
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove 
} from "firebase/firestore";
import { db } from "../firebaseConfig";

import Bookmark from '../assets/icons/Bookmark'

import {Button} from './Button'

const savePlaceToUser = async (place_id,uid,state) => {
  try {
  await updateDoc(
      doc(db,'Users',uid),
      {
        savedPlaces: state ? arrayRemove(place_id):arrayUnion(place_id)
      })
  } catch (e) {
    console.log(e);
  }
}

export const SaveActionButton = ({
  place_id,
}) => {
  
  const userinfo = useAuthContext()
  const isSavedAlready = userinfo?.savedPlaces?.includes(place_id)
  
  const [saved,setSaved] = useState(isSavedAlready)
  const [load,setLoad] = useState(false)
  
  const handleClick = async ()=>{
    
    if(!userinfo)
    return
    
   if(userinfo){
    try {
    setLoad(true)
    await savePlaceToUser(place_id,userinfo.uid,saved)
    } catch (e) {
      console.log(e)
    } finally{
      setLoad(false)
    }
    
    }
    
    setSaved(!saved)

  }
  
  return (
    <Button
    size="sm"
    variant="secondary"
    onClick={handleClick}
    loading={load}
    >
    <Bookmark
    saved={saved}
    />
    </Button>
    )
  
}