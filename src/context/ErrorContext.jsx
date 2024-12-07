import {createContext,useContext,useState} from 'react'

const ErrorContext = createContext()

export const useErrorContext = () => useContext(ErrorContext)

export const ErrorContextProvider = ({children}) => {
  
  const [errorAlert,setErrorAlert] = useState({
    type:'',
    heading:'',
    message:''
  })
  
  const resetAlert = () => setErrorAlert({
    type:'',
    heading:'',
    message:''
  })
  
  return (
    <ErrorContext.Provider
    value={{
    setErrorAlert,
    resetAlert,
    errorAlert
    }}
    >
    {children}
    </ErrorContext.Provider>
    )
}