import uniqid from 'uniqid'

import { useState } from 'react'
import { useAuthContext } from  '../../../context/AuthContext'

import { 
  doc, 
  setDoc,
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

import {Textarea} from '@mantine/core'
import { Button } from '../../../components/Button'
import Send from  '../../../assets/icons/Send'

export const WriteCommentEditor = ({place_id}) => {

  const [text,setText] = useState('')
  
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  
  const userInfo = useAuthContext()
  
  const handleClick = async (e) => {
    
    setError('')
    setLoading(true)
    
    e.preventDefault()
    const comment_id = await uniqid()
    
    try {
    await setDoc(doc(db,'Comments',comment_id),{
        comment_id: comment_id,
        comment: text.trim(),
        commentcreatedat: serverTimestamp(),
        commentcreatedby: userInfo?.uid,
        commentcreatedon: place_id,
        status: true,
        repliedto: null,
        parent_id: null
      })
      
    setText('')
    } catch (e) {
      setError(e.message)
    } finally{
      setLoading(false)
    }
    
  } 
  
  return (
    <Textarea
    disabled={!userInfo}
    radius={12}
    error={error}
    styles={()=>({
    input: {
     width:'100%',
     marginRight:'1rem',
     '&:focus': {
      border: '1.5px solid rgba(91,174,204,1)',
      boxShadow: 'rgba(91,174,204,.3) 0 0 0 2.5px',}
    },
    error: {
      fontSize:'var(--title-text)'
      },
    rightSection: {width:'15%'},
    label:{
        fontSize:'var(--title-text)',
        color: 'var(--dark-text)'
      },
      })}
    placeholder="Write a comment"
    label="Your Comment"
    description={userInfo ? "Share your experience or any info you have about this place and please use your words responsibly and without using any abusive sense.":"Sign up to drop a comment!"}
     autosize
     minRows={1}
     maxRows={6}
     rightSection={
      <Button 
      size="sm"
      disabled={!text || !userInfo}
      loading={loading}
      variant="secondary"
      style={{
        padding:'0',
        boxShadow: 'none'
      }}
      onClick={handleClick}
      >
      <Send />
      </Button> 
    }
     value={text}
     onChange={e => setText(e.target.value)}
      />
    )
}

