import {useState} from 'react'

import Compass from '../../../assets/icons/Compass'
import {Button} from '../../../components/Button'
import {Input} from '../../../components/Input'

export const GeoLocationInput = ({register,errors,setError,setValue,clearErrors}) => {
  
  const [isFetched,setIsFetched] = useState(false)
  
const getCoords = () => {
    
    const successs = ({coords:{latitude,longitude}}) => {
      clearErrors('geopoints')
      setValue('geopoints',Object.values({latitude,longitude}))
    } 
    
    const failure = (e) => {
      setError('geopoints',{message:e.message})
      setValue('geopoints',null)
    }
    
    navigator
    .geolocation
    .getCurrentPosition(successs,failure)
    
  }
  
  return (
    <Input
    error={errors?.geopoints?.message}
    placeholder="Ex. 27.12563 72.263788"
    label="Geo Location"
    description="If you're on the location we get that for you.If you're not don't bother it's not IMP"
    name="geopoints"
    register={register}
    required={false}
    disabled={true}
    rightSection={    
    <Button 
    size="sm"
    variant="secondary"
    loading={isFetched}
    form='none'
    style={{
    padding:'0',
    width:'58px',
    transform:'scale(.9)'
    }}
    onClick={getCoords}
    >
    <Compass/>
    </Button>
    }
    />
)}
