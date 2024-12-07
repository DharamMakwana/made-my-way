import { db,auth } from '../configs'
import {updateEmail} from 'firebase/auth'
import { doc,updateDoc } from "firebase/firestore";

export const updateUserCredentials = async (data,uid) => {
    
    try {
    
    if(data.email){
    await updateEmail(auth.currentUser,data.email)
    await updateDoc(doc(db,'Users',uid),data)
    }
    else
    await updateDoc(doc(db,'Users',uid),data)

    } catch (e) {
    throw new Error(e)
    }
    
  }
  