import styled from 'styled-components'
import {Row} from '../../../layout-components/Row'
import {Col} from '../../../layout-components/Col'

export const DetailsTab = ({address}) => {
  
  return (
     <>
     <Row 
     style={{
     border: '1px solid #dbdbdb',
     borderRadius: '5px',
     padding: '.5rem 1rem'
     }}
     >
     
      <Col alignment="start">
      <p style={{
       fontSize: 'var(--heading-text)',
       fontWeight: 'var(--medium)'
      }}>Address :</p>
      <p style={{
       fontSize: 'var(--title-text)',
      }}>{address}</p>
      </Col>
      
      </Row>
      </>
    )
}

const InfoText = styled.div`
     border: 1px solid #dbdbdb;
     border-radius: 5px;
     padding: .5rem 1rem;
`