import styled from 'styled-components'
import {Row} from '../../../../../layout-components/Row'
import {useAuthContext} from '../../../../../context/AuthContext'
import {Button} from '../../../../../components/Button'

export const ActionButtonPanel = ({
  setCommentState,
  commentState,
  commentcreatedby
}) => {
  
  const userInfo = useAuthContext()
  const isCreator = userInfo?.uid === commentcreatedby
  
  if(userInfo)
  return(
    
    <ButtonContainer>
    
    {!isCreator && <Button
    size="sm"
    variant="ghost"
    style={{
    padding: '5px 10px',
    fontSize: 'var(--para-text)',
    height: 'auto'
    }}
    onClick={() => setCommentState(prev => ({
      reply:!prev.reply,
      edit:false,
      delete:false
    }))}
    >
    {commentState.reply ? 'Cancel':'Reply'}
    </Button>}
    
    {isCreator && <Button
    size="sm"
    variant="ghost"
    style={{
    padding: '5px 10px',
    fontSize: 'var(--para-text)',
    height: 'auto'
    }}
    onClick={() => setCommentState(prev => ({
      edit:!prev.edit,
      reply:false,
      delete:false
    }))}
    >
    {commentState.edit ? 'Cancel':'Edit'}
    </Button> }
    
    {isCreator && <Button
    size="sm"
    variant="ghost"
    style={{
    padding: '5px 10px',
    fontSize: 'var(--para-text)',
    height: 'auto'
    }}
    onClick={() => setCommentState({
      edit:false,
      reply:false,
      delete:true
    })}
    >
    Delete
    </Button>}
    
    </ButtonContainer>
    
    )
}

const ButtonContainer = styled(Row)`
     width: 100%;
`