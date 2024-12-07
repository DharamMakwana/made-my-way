import { useGetDocs } from  '../../../hooks/useGetDocs'

import {Comment} from './Comment'
import {CommentSkeleton} from './Comment/components/CommentSkeleton'
import {WriteCommentEditor} from './WriteCommentEditor'

import {Footer} from '../../../components/Footer'
import {Divider} from '../../../layout-components/Divider'
import {Loader} from '../../../components/Loader'

import DogSwimming from '../../../assets/illustrations/DogSwimming'

import styled from 'styled-components'

export const CommentsTab = ({place_id}) => {
  
  const {data} = useGetDocs('Comments','commentcreatedon',place_id)
  
  const parentComments = data?.filter(doc => doc.parent_id===null)
  const childComments = data?.filter(doc => doc.parent_id!==null)
  
  return (
    <>
    <CommentsContainer>
    
    { 
    !data 
    ? 
    <ManyCommentSkeleton /> 
    : 
    !Boolean(data?.length) 
    ? 
    <DogSwimming />
    :
    parentComments.map(doc => <Comment 
      key={doc.comment_id} 
      place_id={place_id}
      info={doc}
      childComments={childComments}
      />
      ) 
      
    }
    
    <Divider space={20}/>
    
    <WriteCommentEditor
    place_id={place_id}
    />
    </CommentsContainer>
    <Divider />
    <Footer />
    </>
    )
}

const ManyCommentSkeleton = () => (
  <>
  <CommentSkeleton />
  <CommentSkeleton />
  </>
  )

const CommentsContainer = styled.div`
`