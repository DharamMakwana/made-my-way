import { signOut } from 'firebase/auth'
import { auth } from '../configs'

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (e) {
    throw new Error(e)
  }
}