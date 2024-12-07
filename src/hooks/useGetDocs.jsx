import { useState,useEffect } from 'react'
import { db } from '../firebaseConfig'
import { 
  collection, 
  query, 
  where, 
  onSnapshot 
} from "firebase/firestore";

export const useGetDocs = (collectionName,key,value) => {
  
  const [data,setData] = useState(null)
  
  const q = query(
  collection(db,collectionName),
  where(key,"==",value)
  )
  
  useEffect(()=>{
    
    const unsubscribe = onSnapshot(q,(snap)=>{
    setData(snap.docs.map(doc => doc.data()))})
    
    return () => unsubscribe()
  },[])
  
  return {data}
}