import {useNavigate} from 'react-router-dom'
import {useAuthContext} from '../../../context/AuthContext'

import {Image} from '../../../components/Image'
import {LikeActionButton} from '../../../components/LikeActionButton'
import {SaveActionButton} from '../../../components/SaveActionButton'
import {Button} from '../../../components/Button'

import {Row} from '../../../layout-components/Row'
import {Col} from '../../../layout-components/Col'

import Location from '../../../assets/icons/Location'
import Comment from '../../../assets/icons/Comment'
import Bookmark from '../../../assets/icons/Bookmark'

import styled from 'styled-components'

const SiteLocation = ({placename,cityname}) => {
  return (
    <Col alignment='start'>
    <p
    style={{
    fontSize:'var(--title-text)',
    fontWeight:'var(--bold)',
    color:'var(--dark-text)',
    }}
    >{placename}</p>
    <Row gap={2}>
    <Location/>
    <p
    style={{
    fontSize:'var(--para-text)',
    fontWeight:'var(--medium)',
    color:'var(--lighter-text)',
    }}
    >{cityname}</p>
    </Row>
    </Col>
    )
}

const SitePraiseCounter = ({likesby,place_id,likescounter}) => {
  
  const userInfo = useAuthContext()
  
  const isAlreadyLiked = likesby.includes(userInfo?.uid)
  
  return (
    <Row 
    style={{
      padding:'7px',
      margin: '8px 0'
    }}>
  
    <LikeActionButton 
    likescounter={likescounter}
    initialState={isAlreadyLiked}
    place_id={place_id}
    />
  
    </Row>
    )
}

const ActionButtons = ({place_id}) => {
  
  const navigate = useNavigate()
  
  return(
    <ButtonContainer>
    
    <SaveActionButton 
    place_id={place_id}
    />
    
    <Button 
    onClick={() => navigate(`/site/${place_id}`)}
    size="sm">
    Show Details
    </Button>
    
    </ButtonContainer>
    )
}

export function SiteCard({info}) {
  
  return (
  <CardFigure>
    <Image 
     src={info.thumbnail}
     height={190}/>
  
    <SiteDetails>
      <SiteLocation 
      cityname={info.cityname}
      placename={info.placename}
      />
      <SitePraiseCounter 
      likesby={info.likesby}
      place_id={info.place_id}
      likescounter={info.likescounter}
      />
    </SiteDetails>
  
    <ActionButtons 
    place_id={info.place_id} />
  </CardFigure>
  );
}

const CardFigure = styled.figure`
     border: 1px solid #dbdbd8;
     border-radius: var(--md-rad);
     padding: 8px;
     width: 100%;
     max-width: 360px;
`

const ButtonContainer = styled.div`
     display: grid;
     grid-template-columns: 60px auto; 
     grid-gap: 8px;
`

const SiteDetails= styled(Row)``