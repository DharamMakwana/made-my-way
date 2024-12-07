import { useState } from 'react'
import {useInfiniteScroll} from '../../../hooks/useInfiniteScroll'
import {useLocationContext} from '../../../context/LocationContext'

import {Button} from '../../../components/Button'
import {Loader} from '../../../components/Loader'
import { Grid } from '../../../layout-components/Grid'
import { SiteCard } from './SiteCard'

import Astronaut from '../../../assets/illustrations/Astronaut'
import Laptop from '../../../assets/illustrations/Laptop'
import Refresh from '../../../assets/icons/Refresh'

import styled from 'styled-components'




const PlacesComponent = ({district}) => {
  
  const { 
    posts,
    nextBatch,
    loadingPosts 
  } = useInfiniteScroll(
    "cityname",district
    )
  
  if(!posts.data)
  return(
  <PageWrapper
  style={{
  display:'grid',
  placeItems:'center'
  }}>
  <Loader />
  </PageWrapper>
  )
  
  if(!posts.data.length)
  return(
  <ErrorContainer>
  <Laptop />
  </ErrorContainer>
  )
  
  if(posts.data.length)
  return (
    <>
    <Grid>
    { posts.data.map(
      doc => <SiteCard 
      key={doc.place_id} 
      info={doc} 
      />
      )
    }
    </Grid>
    <Button
    size="md"
    disabled={posts.error}
    variant="secondary"
    style={{ 
    width:'80%',
    marginTop:'12px',
    margin:'15px auto'
    }}
    loading={loadingPosts}
    onClick={() => nextBatch()}
    >
    { posts.error || 'Load More' }
    </Button>
    </>
    )
  }

const ErrorComponent = ({initiateRender,geoInfo}) => {

  return(
    <ErrorContainer>
    <Astronaut />
    <p
    style={{
      fontWeight:'var(--medium)',
      color:'var(--light-text)',
      textAlign: 'center',
      marginBottom:'1rem'
    }}
    >{`${geoInfo?.error?.message}.Turn on your device's location,then hit refresh.`}</p>
    <Button 
    size="sm"
    variant="primary"
    icon={<Refresh />}
    onClick={() => initiateRender()}
    >
    Refresh...
    </Button>
    </ErrorContainer>
    )
}

const NativeLocationPlaces = () => {
  
  const {
    initiateRender,
    geoInfo
  } = useLocationContext()
  
  const district = geoInfo.location.state_district
  
  return (
    <PageWrapper>
    <p
    style={{
      fontSize:'var(--pagetitle-text)',
      color:'var(--dark-text)',
    }}
    >Places near you</p>
    <p
    style={{
      fontSize:'var(--para-text)',
      color:'var(--light-text)',
      marginBottom:'1rem'
    }}
    >Easier for you to check them out!</p>
    
    {
    !geoInfo.error
    ? 
    district && <PlacesComponent 
    district={district}
    />
    :
    <ErrorComponent 
    geoInfo={geoInfo}
    initiateRender={initiateRender}
    />
    }
    </PageWrapper>
    )
}

export const PageWrapper = styled.div`
     margin: 1rem auto;
     margin-top: 0;
     min-height: 300px;
`

const ErrorContainer = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: .5rem;
`

export default NativeLocationPlaces
