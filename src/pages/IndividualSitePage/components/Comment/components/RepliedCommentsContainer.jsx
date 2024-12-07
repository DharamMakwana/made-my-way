import {Comment} from '../index'
import {Button} from '../../../../../components/Button'
import { useState } from 'react'
import styled from 'styled-components'

export const RepliedCommentsContainer = ({comments,place_id}) =>
{
    const [view,setView] = useState(false)

  return (
    <>
    
    {(comments && Boolean(comments?.length)) && <Button
    size="sm"
    variant="ghost"
    style={{
      padding:'0 7px',
      marginLeft: '0%',
      marginTop: '10px',
      height:'20px',
      fontSize: 'var(--para-text)',
      fontWeight: 'var(--normal)',
    }}
    onClick={() => setView(!view)}
    >
    {`${view ? 'Close all':`View ${comments.length} replies`}`}
    </Button> }
    
    {
    view && (
    <Container>
    {
    comments?.map(doc => (
    <Comment 
    info={doc}
    key={doc.comment_id}
    place_id={place_id}
    />
    ))
    }
    </Container>
    )
    }
    
   
    </>
    )
}

const Container = styled.div`
     width: 90%;
     margin: 1rem 0;
     margin-top: 0;
     margin-left: auto;
`