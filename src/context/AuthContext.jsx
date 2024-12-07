import {createContext,useContext,useState,useEffect,useMemo} from 'react'

import { db,auth } from '../firebaseConfig'
import {onAuthStateChanged} from 'firebase/auth'
import { doc,onSnapshot } from "firebase/firestore";

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
  
  const [user,setUser] = useState(null)
  
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
      onSnapshot(doc(db, "Users", user.uid),(doc)=>{
      setUser(doc.data())})
      }
      else setUser(null)
      })
    return () => {unsubscribe()}
  },[])
  
  const userInfo = useMemo(()=>(user),[user])

  return (
    <AuthContext.Provider
    value={userInfo}
    >
    {children}
    </AuthContext.Provider>
    )
}