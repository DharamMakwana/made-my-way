import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../configs'

export const SignInWithEmail = async (email,password) => {
   try {
    await signInWithEmailAndPassword(auth,email,password)
   } catch (e) {
    throw new Error(e)
   }
  }
