import { useState,useEffect } from 'react'
import { useAuthContext } from '../../../context/AuthContext'

import { db } from '../../../firebaseConfig'
import { 
  doc,
  getDoc
} from 'firebase/firestore'

import { Grid } from '../../../layout-components/Grid'
import { Loader } from '../../../components/Loader'
import { SiteCard } from '../../SitesPage/components/SiteCard'

import AirBalloon from '../../../assets/illustrations/AirBalloon'

const getDocsWithArrayOfIds = async (arrayOfIds) => {
  const data = []
  
  try {
  for(let id of arrayOfIds){
    
  const returnDoc = await getDoc(doc(db,'Places',id))
  
  if(returnDoc.exists())
  data.push(returnDoc.data())
  
  }
  } catch (e) {
    console.log(e)
  }
  return data
}

export const MyBookmarksTab = () => {
  
  const [docs,setDocs] = useState(null)
  const userinfo = useAuthContext()
  
  useEffect(() => {
  getDocsWithArrayOfIds(userinfo.savedPlaces)
  .then(res => setDocs(res))
  .catch(e => console.log(e))
  },[])
  
  if (!docs) {
    return (<Loader 
    screencenter={true}/>)
  }
  
  if (!docs?.length) {
    return (<AirBalloon />)
  }
  
  
  if(docs?.length)
  return(
    <Grid 
    style={{padding:'0 .5rem'}}>
    {
    docs?.map(doc => <SiteCard key={doc.place_id} info={doc}/>)
    }
    </Grid>
  )
  
}