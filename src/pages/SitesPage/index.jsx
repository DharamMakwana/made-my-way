import styled from 'styled-components'

import NativeLocationPlaces from './components/NativeLocationPlaces'
import RecommendedPlaces from './components/RecommendedPlaces'
import {SiteCard} from './components/SiteCard'

import {Footer} from '../../components/Footer'
import {Divider} from '../../layout-components/Divider'


const SitesPage = () => {
  
  return (
    <>
    <NativeLocationPlaces />
    <RecommendedPlaces />
    
    <Divider />
    
    <Footer />
    </>
    )
}

export default SitesPage