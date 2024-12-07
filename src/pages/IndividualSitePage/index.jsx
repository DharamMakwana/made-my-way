import { useParams } from 'react-router-dom'
import { useGetDoc } from '../../hooks/useGetDoc'

import { SplashScreen } from '../../layout-components/SplashScreen'

import { Carousel } from './components/Carousel'
import { SiteDetails } from './components/SiteDetails'
import { DetailsTab } from './components/DetailsTab'
import { CommentsTab } from './components/CommentsTab'
import {Tabs} from '@mantine/core'

import Chat from '../../assets/icons/Chat'
import Document from '../../assets/icons/Document'

import ErrorPage from '../../assets/illustrations/ErrorPage'

import styled from 'styled-components'

const IndividualSitePage = () => {
  
  const { place_id } = useParams()
  const {data,error} = useGetDoc(
    'Places',place_id
)
  
  if(error){
  return (<ErrorPage />)
  }
  
  if(!data)
  return(
  <SplashScreen 
  allTheWayUp={false}
  />
  )
  
  if(data)
  return (
   <>
   
   <GridViewForDekstops>
   
   <Carousel
   images={data.otherimages}
    /> 
    
   <SiteDetails 
    placename={data.placename}
    cityname={data.cityname}
    createdby={data.createdby}
    labels={data.labels}
    likescounter={data.likescounter}
    />
    
    </GridViewForDekstops>
    
    <Tabs 
    grow
    styles={()=>({
      tabLabel:{
        fontSize:'var(--title-text)'
      }
    })}
    >

    <Tabs.Tab 
    label="Details" 
    icon={<Document />}
    >
    <DetailsTab 
    address={data.address}/>
    </Tabs.Tab>
      
    <Tabs.Tab 
    label="Comments" 
    icon={<Chat />}
    >
    <CommentsTab 
    place_id={place_id}
    />
    </Tabs.Tab>
      
    </Tabs>
    
    </>
    )
}

const GridViewForDekstops = styled.div`
		 display: grid;
		 
		 @media(min-width: 900px){
		 	grid-template-columns: 1fr 1fr
		 	;
		 	align-items: center;
		 	justify-items: center;
		 	
		 }
`

export default IndividualSitePage