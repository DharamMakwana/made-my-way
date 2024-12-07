import { useAuthContext } from '../../../context/AuthContext'
import { useGetDocs } from '../../../hooks/useGetDocs'

import { Grid } from '../../../layout-components/Grid'
import { Loader } from '../../../components/Loader'

import { SiteCard } from '../../SitesPage/components/SiteCard'

import NaughtyDog from '../../../assets/illustrations/NaughtyDog'

export const MyUploadsTab = () => {
  
  const userinfo = useAuthContext()
  const {data} = useGetDocs('Places','createdby',userinfo.uid)
  
  if (!data) {
    return (
    <Loader 
    screencenter={true}/>
    )
  }
  
  if (!data.length) {
    return (<NaughtyDog />)
  }
  
  if(data.length)
  return (
    <Grid
    style={{padding:'0 .5rem'}}
    >
    {
    data.map(doc => <SiteCard key={doc.place_id} info={doc}/>)
    }
    </Grid>
    )
  
}