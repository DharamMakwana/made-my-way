import React from 'react'
import {Routes,Route} from 'react-router-dom'

import {BaseLayout} from '../layout-components/BaseLayout'
import {SplashScreen} from '../layout-components/SplashScreen'
import {ProtectedRoute} from '../components/ProtectedRoute'


import SearchPage from '../pages/SearchPage'
import SettingPage from '../pages/SettingPage'
import UploadsPage from '../pages/UploadsPage'

import ErrorPage from '../assets/illustrations/ErrorPage'

const SitesPage = React.lazy(() => import('../pages/SitesPage'))
const AddSitePage = React.lazy(() => import('../pages/AddSitePage'))
const IndividualSitePage = React.lazy(() => import('../pages/IndividualSitePage'))

export const RoutesTree = () => {
  return(
    <Routes>
    
    <Route 
    path='/'
    element={<BaseLayout/>}
    >
    

    <Route 
    index
    element={
    <React.Suspense 
    fallback={
    <SplashScreen
    allTheWayUp={false}
    />
    }
    >
    <SitesPage />
    </React.Suspense>
    }
    />
    
    <Route 
    path='search' 
    element={
    <SearchPage />
    }
    />
    
    <Route 
    path='site/:place_id' 
    element={
    <React.Suspense 
    fallback={
    <SplashScreen
    allTheWayUp={false}
    />
    }
    >
     <IndividualSitePage />
    </React.Suspense>
    }
    />
    
    <Route 
    path='setting' 
    element={
    <ProtectedRoute>
    <SettingPage />
    </ProtectedRoute>
    }
    />
    
    <Route 
    path='addsite' 
    element={
    <React.Suspense 
    fallback={
    <SplashScreen 
    allTheWayUp={false}/>
    }
    >
     <ProtectedRoute>
      <AddSitePage />
     </ProtectedRoute>
    </React.Suspense>
    }
    />
    
    <Route 
    path='myuploads' 
    element={
    <ProtectedRoute>
    <UploadsPage />
    </ProtectedRoute>
    }
    />
    
    <Route 
    path='*' 
    element={<ErrorPage />}
    />
    
    </Route>
    
    
    </Routes>
    )
}