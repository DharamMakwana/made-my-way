import {
  createContext,
  useContext,
  useState
} from 'react'
import { usePosition } from '../hooks/usePosition'

const LocationContext = createContext()

export const useLocationContext = () => useContext(LocationContext)

export const LocationContextProvider = ({children}) => {
  
  const [geoInfo,setGeoInfo] = useState({
    error:null,
    location:{}
  })
  
  const {
    initiateRender,
    loading
  } = usePosition(setGeoInfo)

  return (
    <LocationContext.Provider
    value={{
    initiateRender,
    geoInfo,
    loading
    }}
    >
    {children}
    </LocationContext.Provider>
    )
}