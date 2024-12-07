import {
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo
} from 'firebase/auth'

import { doc,setDoc } from "firebase/firestore"; 
import { auth,db } from '../configs'

export const GoogleSignIn = async () => {
  try {
    
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth,provider)

    const newUser =  await getAdditionalUserInfo(user).isNewUser
    
    const {user:{reloadUserInfo:{displayName,email,photoUrl},uid,phoneNumber}} = user
    
    if(newUser){
    await setDoc(doc(db,'Users',uid),{email,displayName,photoUrl,uid,phoneNumber})
     }
    
  } catch (e) {
    throw new Error(e)
  }
  }