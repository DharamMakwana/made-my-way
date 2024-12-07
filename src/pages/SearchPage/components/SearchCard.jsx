import {useNavigate} from 'react-router-dom'

import Location from '../../../assets/icons/Location'

import { Image } from '../../../components/Image';
import { Button } from '../../../components/Button';

import {Row} from '../../../layout-components/Row';
import {Col} from '../../../layout-components/Col';
import {Divider} from '../../../layout-components/Divider';


import styled from 'styled-components';


export const SearchCard = ({info}) => {
  
  const navigate = useNavigate()

  return (
    <SearchCardStyle>
    
    <Row 
    gap={8}
    style={{width:'100%'}}>
    
    <Image 
    src={info?.thumbnail}
    height={60}
    width={60}
    />
    
    <Col 
    alignment='start' 
    style={{marginRight:'auto'}}>
    
    <p
    style={{
    fontSize:'var(--title-text)',
    fontWeight:'var(--medium)',
    letterSpacing:'.3px'
    }}>{info?.placename}</p>
    
    <p 
    style={{
    fontSize:'var(--para-text)',
    color:'var(--lighter-text)',
    width:'100%',
    display:'flex',
    alignItems:'center'
    }}
    >
    <Location />
    {info?.cityname}
    </p>
    
    </Col>
    
    </Row>
    
    <Divider/>
    
    <Button 
    size="sm" 
    variant="ghost"
    style={{
    width:'100%',
    height:'35px'
    }}
    onClick={() => navigate(`/site/${info?.place_id}`)}
    >
    Show Details
    </Button>
    
    </SearchCardStyle>
    )
}

const SearchCardStyle = styled.div`
      display: flex;
      width: 90%;
      max-width: 500px;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #dbdbdb;
      border-radius: 10px;
      padding: .5rem;
`