import {useInfiniteScroll} from '../../../hooks/useInfiniteScroll'

import styled from 'styled-components'
import { SiteCard } from './SiteCard'

import { Button } from '../../../components/Button'
import { Loader } from '../../../components/Loader'
import { Grid } from '../../../layout-components/Grid'

const PlacesComponent = () => {
  
  const { 
    posts,
    nextBatch,
    loadingPosts 
  } = useInfiniteScroll()
  
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
  
  if(posts.data.length)
  return(
    <>
    <Grid>
    { posts.data.map(doc =>     <SiteCard 
      key={doc.place_id} 
      info={doc} />
      )}
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

const RecommendedPlaces = () => {
  
  return(
    <PageWrapper>
    
    <p
    style={{
      fontSize:'var(--pagetitle-text)',
      color:'var(--dark-text)',
    }}
    >Recommended places</p>
    <p
    style={{
      fontSize:'var(--para-text)',
      color:'var(--light-text)',
      marginBottom:'1rem'
    }}
    >Let's discover some new place
    </p>
    
    <PlacesComponent />
  
    </PageWrapper>
    )
}

export default RecommendedPlaces

export const PageWrapper = styled.div`
     margin: 1rem auto;
     min-height: 300px;
`