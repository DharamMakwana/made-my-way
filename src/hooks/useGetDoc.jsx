import { useState,useEffect } from 'react'
import { db } from '../firebaseConfig'
import { doc,getDoc } from 'firebase/firestore'

export const useGetDoc = (collection,docID) => {
  
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)
  
  useEffect(() => {
    
    getDoc(doc(db,collection,docID))
    .then(res => {
      
    if (!res.exists())
    throw new Error('Document not exists')
    
    setData(res.data())
    })
    .catch(e => {
    setError(e.message)
    })
    
  },[])
  
  return {data,error}
}