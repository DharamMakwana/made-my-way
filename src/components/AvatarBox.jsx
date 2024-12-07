import {useAuthContext} from '../context/AuthContext'
import {useLocationContext} from '../context/LocationContext'
import {useWindowSize} from '../hooks/useWindowSize'

import {findStateAbbreviation} from '../utils/findStateAbbreviation'

import {Row} from '../layout-components/Row'
import {Col} from '../layout-components/Col'
import {Image} from '../components/Image'
import {Button} from '../components/Button'
import { GradientText } from './GradientText'

import newuser from '../assets/image/newuser.jpeg'

import styled from 'styled-components'
import Location from '../assets/icons/Location'

const LoactionDisplay = () => {
  
  const {
    geoInfo,
    loading
  } = useLocationContext()
  
  return (
    <Row>
    
    <Location />
    <p
    style={{
    fontSize:'var(--para-text)',
    fontWeight:'var(--bold)',
    color:'var(--dark-text)',
    marginLeft: '2px'
    }}
    >
    {
    loading 
    ? 
    'loading...'
    : 
    `${
    geoInfo?.location?.state_district || 
    'Not Available'
    },
    ${
    findStateAbbreviation(geoInfo?.location?.state) 
    || 
    ''
    }`
    }
    </p>
    
    </Row>
    )
}

export const AvatarBox = ({setOpenForms}) => {
  
  const userInfo = useAuthContext()
  
  const {width} = useWindowSize()
  
  return(
    <Container>
    <Row>
    
    <Col alignment='start'>
    
    <p
    style={{
    fontSize:'var(--para-text)',
    fontWeight:'var(--medium)',
    color:'var(--lighter-text)',
    }}
    >{`Hii,${userInfo?.displayName || 'Guest'}!`}</p>
    
   <LoactionDisplay />
    
   </Col>
   
   { 
   width > 1000 
   && 
   <GradientText>
   MadeMyWay
   </GradientText>
   }
    
   { 
   userInfo
   ? 
   <Image 
    src={userInfo?.photoUrl || newuser}
    alt={userInfo?.displayName}
    radius={50}
    height={30}
    width={30}
    progressive={false}
    />
    :
    <Button
    size="sm"
    onClick={() => setOpenForms(true)}
    style={{
    padding:'0 15px',
    height:'32px'
    }}
    >
    Join Us!
    </Button>
   }
    
    </Row>
    </Container>
    )
}

const Container = styled.div`
     padding: 12px 8px;
     border: 1px solid #dbdbd8;
     background: #fff;
     
     position: sticky;
     top: 0;
     z-index: var(--cloud-5);
     
     border-bottom-right-radius: 10px;
     border-bottom-left-radius: 10px;
`