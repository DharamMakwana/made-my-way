import {
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { doc,setDoc } from "firebase/firestore"; 
import { auth,db } from '../configs'

export const SignUpWithEmail = async(email,password) => {
  try {
    const {user:{uid}} = await createUserWithEmailAndPassword(auth,email,password)
    
    await setDoc(doc(db,'Users',uid),{email,uid,displayName:'',photoUrl:''})
    
  } catch (e) {
    throw new Error(e)
  }
}