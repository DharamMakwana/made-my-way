import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../configs'

export const ResetPasswordWithEmail = async () =>
  {
    try {
    await sendPasswordResetEmail(auth,auth.currentUser.email)
    } catch (e) {
    throw new Error(e.message)
    }
  }
  