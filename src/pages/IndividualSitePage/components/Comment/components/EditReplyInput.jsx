import uniqid from 'uniqid'

import { useState,useRef,useEffect } from 'react'
import { useAuthContext } from '../../../../../context/AuthContext'
import { actionReducer } from '../actionReducer'

import { Button } from '../../../../../components/Button'
import { Textarea } from '@mantine/core'

export const EditReplyInput = ({
  value,
  setCommentState,
  commentState,
  comment_id,
  repliedComment_parent_id,
  repliedComment_comment_id,
  repliedComment_user_name,
  place_id
}) => {
  
  const InputRef = useRef(null)
  
  useEffect(() => {
  if (InputRef)
  InputRef.current.focus()
  },[])
  
  const [text,setText] = useState(value)
  const userInfo = useAuthContext()
  
  const editPayload = {
    id:comment_id,
    text
  }
  
  const replyPayload = {
    newcomment_id: uniqid(),
    comment: (text+'').trim(),
    user_uid: userInfo?.uid,
    place_id: place_id,
    repliedComment_comment_id,
    repliedComment_parent_id,
    repliedComment_user_name
  }
  
  return (
    <Textarea
    radius={12}
    ref={InputRef}
    size="xs"
    placeholder={commentState.reply && `Replying to ${repliedComment_user_name}`}
    styles={() => ({
      root:{width:'100%'},
      input:{width:'100%'}
    })}
    autosize
    minRows={1}
    maxRows={6}
    value={text}
    onChange={e => setText(e.target.value)}
    rightSection={
     <Button 
     size="sm"
     variant="ghost"
     style={{
      padding: '2px 4px',
      fontSize: 'var(--para-text)',
      height: 'auto'
     }}
     onClick={() => {
     actionReducer({
       type:commentState.edit?'edit':'reply',
       payload:commentState.edit?editPayload:replyPayload
     })
     setCommentState({
      edit:false,
      reply:false,
      delete:false
     })
     }}
     >
     {commentState.edit ? 'Edit':'Send'}
     </Button>
      }
    />
    )
}