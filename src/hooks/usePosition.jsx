import { useState,useEffect } from 'react'
import { useForcedRender } from './useForcedRender'

import { fetchCityName } from '../utils/fetchCityName'

import { auth,db } from '../firebaseConfig'
import { updateDoc,doc } from 'firebase/firestore'

export const usePosition = (setterFunction) => {
  
  
  const [loading,setLoading] = useState(true)

  const [forced,initiateRender] = useForcedRender()
  
  
  const onChange = ({coords}) => {
  
    setterFunction(prev => ({
      ...prev,
      error: null,
    }))
    
    fetchCityName(
     coords.latitude,
     coords.longitude
    )
    .then((res) => setterFunction(prev =>
    ({
      ...prev,
      location: res
    })))
    .catch(e => setterFunction({
      error: e,
      location: {}
    }))
    .finally(() => setLoading(false))
    
    if(auth.currentUser){
    updateDoc(doc(db,'Users',auth.currentUser.uid),{location:[coords.latitude,coords.longitude]})
    .then(res => res)
    .catch(e => console.log(e))
    }
    }
    
  const onError = (e) => { 
    setterFunction(prev => ({
      ...prev,
      error: e,
      location:{}
    }))
    setLoading(false)
  }
  
  useEffect(() => {

  if(!navigator.geolocation){
      setGeoError({
        message: 'Geolocation is not supported'
      })
      return
    }
    
    const id = navigator
    .geolocation
    .watchPosition(onChange,onError);
    
    return () => navigator
    .geolocation.clearWatch(id);
    
  },[forced])
  
  return {initiateRender,loading}
   
}