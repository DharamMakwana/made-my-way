import { motion } from 'framer-motion'
import {actionReducer} from '../actionReducer'
import {Button} from '../../../../../components/Button'
import {Row} from '../../../../../layout-components/Row'
import styled from 'styled-components'
export const DeleteCommentModal = ({
  setCommentState,
  comment_id
}) => {
  return (
    <DeleteCommentModalWrapper
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:.25}}
    >
    
    <p
    style={{
      fontSize:'var(--title-text)',
      fontWeight:'var(--medium)',
      color:'#fff',
    }}
    >Are you sure about this?</p>
    <Row 
    gap={12}
    spacing="center">
    
    <Button
    size="sm"
    variant="primary"
    style={{
    padding: '5px 10px',
    fontSize: 'var(--para-text)',
    height: 'auto'
    }}
    onClick={() => setCommentState({
      edit:false,
      reply:false,
      delete:false
    })}
    >
    Cancel
    </Button>
    
    <Button
    size="sm"
    variant="ghost"
    style={{
    padding: '5px 10px',
    fontSize: 'var(--para-text)',
    height: 'auto',
    color: '#ea4343',
    }}
    onClick={() => actionReducer({
      type:'delete',
      payload:{id:comment_id}
    })}
    >
    Delete
    </Button>
    
    </Row>
    
    </DeleteCommentModalWrapper>
    )
}

const DeleteCommentModalWrapper = styled(motion.div)`
     width: 100%;
     height: 100%;
     
     position: absolute;
     top: 0;
     left: 0;
     
     display: grid;
     place-items: center;
     align-content: center;
     gap: 10px;
     
     border: .5px solid #dbdbd8;
     border-radius: 10px;
     
     background: rgba(0,0,0,.5);
     backdrop-filter: blur(3px);
`