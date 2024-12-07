import { useState } from 'react'
import { useGetDoc } from  '../../../../hooks/useGetDoc'

import { motion } from 'framer-motion'

import { actionReducer } from './actionReducer'
import { daysBetweenTwoDates } from '../../../../utils/daysBetweenTwoDates'

import {EditReplyInput} from './components/EditReplyInput'
import {DeleteCommentModal} from './components/DeleteCommentModal'
import {ActionButtonPanel} from './components/ActionButtonPanel'
import {CommentSkeleton} from './components/CommentSkeleton'
import {RepliedCommentsContainer} from './components/RepliedCommentsContainer'

import {Image} from '../../../../components/Image'

import {Row} from '../../../../layout-components/Row'
import {Col} from '../../../../layout-components/Col'
import {Divider} from '../../../../layout-components/Divider'

import styled from 'styled-components'

export const Comment = ({
  info,place_id,childComments
}) => {
  
  const [commentState,setCommentState]=useState({
      edit:false,
      reply:false,
      delete:false
    })
  const [viewReplies,setViewReplies]=useState(false)
  
  const {data:user}=useGetDoc('Users',info.commentcreatedby)
  
  const repliedComments=childComments?.filter(doc => doc.parent_id===info.comment_id)
  
  
  if(!user)
  return(<CommentSkeleton />)
  
  if(user)
  return(
    <>
    <CommentWrapper
    initial={{opacity:0,y:5}}
    animate={{opacity:1,y:0}}
    transition={{duration:.25}}
    >
    
    <Image 
    src={user.photoUrl}
    height={35}
    width={35}
    radius={35}
    progressive={false}
    />
    
    <CommentBody alignment="start">
    
    <Row style={{minWidth:'100%'}}>
    <p
    style={{
      fontSize:'1.1rem',
      fontWeight:'var(--medium)',
      color:'var(--dark-text)',
    }}
    >{user.displayName}</p>
    
    {info.repliedto && <p
    style={{
      fontSize:'.8rem',
      fontWeight:'var(--normal)',
      color:'var(--lighter-text)',
    }}
    >{`RepliedTo: ${info.repliedto}`}
    </p>}
    
    </Row>
    
    <p
    style={{
      fontSize:'var(--body-text)',
      fontWeight:'var(--medium)',
      color:'var(--lighter-text)',
    }}
    >{daysBetweenTwoDates(info.commentcreatedat?.seconds)}</p>
    
    {
    commentState.edit
    ?
    <EditReplyInput 
    value={info.comment}
    comment_id={info.comment_id}
    setCommentState={setCommentState}
    commentState={commentState}
    />
    :
    <CommentText 
    text={info.comment} 
    />
    }
    
    <Divider space={8} />
    
    <ActionButtonPanel
    commentcreatedby={info.commentcreatedby}
    setCommentState={setCommentState}
    commentState={commentState}
    />
    
    </CommentBody>
    
   {
   commentState.delete 
   &&  
   <DeleteCommentModal
   setCommentState={setCommentState}
   comment_id={info.comment_id}
   />
   }
    
   </CommentWrapper>
   
   {
   commentState.reply 
   &&  
   <EditReplyInput 
   commentState={commentState}
   setCommentState={setCommentState}
   repliedComment_parent_id={info.parent_id}
   repliedComment_comment_id={info.comment_id}
   repliedComment_user_name={user.displayName}
   place_id={place_id}
   />
   }
   
   <RepliedCommentsContainer 
   comments={repliedComments}
   place_id={place_id}
   />
   
    </>
    )
}

const CommentText = ({text})=>{
  return (
    <p style={{
    fontSize: 'var(--para-text)',
    fontWeight: 'var(--medium)',
    color: 'var(--light-text)',
    }}>
    {text}
    </p>
    )
}

const CommentWrapper = styled(motion.div)`
     width: 100%;
     position: relative;
     
     border: .8px solid #dbdbd8;
     border-radius: 10px;
     
     display: grid;
     place-items: center;
     align-items: start;
     grid-template-columns: 40px auto;
     
     padding: .25rem .5rem;
     margin: 1rem auto;
     margin-bottom: 0;
`
const CommentBody = styled(Col)`
     width: 100%;
     padding: .25rem .5rem;
`


