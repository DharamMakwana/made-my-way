import { RoutesTree } from './routes'
import GlobalStyles from './GlobalStyles'
import { AuthContextProvider } from './context/AuthContext'
import { ErrorContextProvider } from './context/ErrorContext'
import { LocationContextProvider } from './context/LocationContext'
import { Alert } from './components/Alert'
import { SplashScreen } from './layout-components/SplashScreen'



function App() {
  

  return(
  <>
  <ErrorContextProvider>
  <AuthContextProvider>
  <LocationContextProvider>
    <GlobalStyles/>
    <RoutesTree/>
    <Alert/>
  </LocationContextProvider>
  </AuthContextProvider>
  </ErrorContextProvider>
  </>
    )
}

export default App
