import { useRef,useEffect,useState } from 'react'
import {
  orderBy,
  startAfter,
  limit,
  query,
  where,
  collection,
  getDocs,
} from 'firebase/firestore'
import {db} from '../firebaseConfig'

export const useInfiniteScroll = (  property="status",
  value=true
) => {
  
  const key = useRef(null)
  
  const [posts,setPosts] = useState({
    data:null,
    error: null
  })
  const [
    loadingPosts,setLoadingPosts
    ] = useState(false)
  
  const firstBatch = async()=>{
    
    try {
    setLoadingPosts(true)
      
    const q = query(
      collection(db,'Places'),
      where(property,"==",value),
      orderBy('createdat'),
      limit(3)
      )
      
    const data = await getDocs(q)
    const docs = data.docs.map(doc => doc.data())
    
    key.current = docs?.at(-1)?.createdat || null
    
    setPosts({data:docs,error:null})
    } catch (e) {
      setPosts(prev => ({...prev,error:e.message}))
    } finally{
      setLoadingPosts(false)
    }
  }
  
  const nextBatch = async()=>{
    try {
    setLoadingPosts(true)
  
    const q = query(
      collection(db,'Places'),
      where(property,"==",value),
      orderBy('createdat'),
      startAfter(key.current),
      limit(2))
      
    const data = await getDocs(q)
    const docs = data.docs.map(doc => doc.data())
    
    if (!docs.length) {
      setPosts(prev => ({...prev,error:"That's all we have for today!!!"}))
      return
    }
    
    key.current = docs?.at(-1)?.createdat
    setPosts(prev => ({
      data: [...prev.data,...docs],
      error: null
    }))
    } catch (e) {
      setPosts(prev => ({...prev,error:e.message}))
    } 
    finally{
      setLoadingPosts(false)
    }

  }
  
  useEffect(() => {
    firstBatch()
  },[])
  
  return { 
    posts,
    nextBatch,
    loadingPosts 
  }
  
}