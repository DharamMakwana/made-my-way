import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useAuthContext} from '../../../context/AuthContext'
import {useErrorContext} from '../../../context/ErrorContext'

import {updateUserCredentials} from '../../../firebase/firestore-functions/updateUserCredentials'
import {ResetPasswordWithEmail} from '../../../firebase/auth-functions/ResetPasswordWithEmail'
import {logout} from '../../../firebase/auth-functions/Logout'
import {cleanObject} from '../../../utils/cleanObject'

import {Button} from '../../../components/Button'
import {Input} from '../../../components/Input'
import {Loader} from '../../../components/Loader'

import {Row} from '../../../layout-components/Row'

import styled from 'styled-components'

export const DetailsUpdateForm = () => {
  
  const userInfo = useAuthContext()
  const {setErrorAlert} = useErrorContext()
  const [resetPasswordLoad,setResetPasswordLoad] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors,
      isSubmitting
    },
    setError,
    clearErrors
  } = useForm()
  
  const handleUpdate = async (data) => {
    
    if (!data.email&&!data.displayName) {
    return setError('onSubmitError',{message:'All fields are empty.'})
    }
    
    try {
    await updateUserCredentials(cleanObject(data),userInfo.uid)
    setErrorAlert({
      type:'success',
      heading: 'Credentials Updated!!!',
      message: 'Changes are updated.'
    })
    reset()
    } catch (e) {
    setError('onSubmitError',{message:e.message})
    }
  }
  
  const handleResetPassword = async () => {
    
    clearErrors()
    setResetPasswordLoad(true)
    
    try {
      await ResetPasswordWithEmail()
      setErrorAlert({
      type:'success',
      heading: `Email sent to ${userInfo?.email}`,
      message: 'Link to reset your password has been sent check your inbox or spam.'
    })
    } catch (e) {
      setError('onSubmitError',{message:e.message})
    } finally{
      setResetPasswordLoad(false)
    }
  }
  
  return(
    <FormContainer>
    
    <form 
    id="form" 
    onSubmit={e => {
      clearErrors()
      handleSubmit(handleUpdate)(e)
    }}>
    
    <Input
      placeholder="Update E-mail"
      name="email"
      register={register}
      required={false}
    />
    
    <Input
      placeholder="Update Display Name"
      name="displayName"
      register={register}
      required={false}
    />
    
    <Input
      disabled={true}
      placeholder="Reset Password Via Email"
      name="reset-password"
      register={register}
      required={false}
      rightSection={
      !resetPasswordLoad
      ?
      <Button 
      form="not-form" 
      onClick={() => handleResetPassword()}
      style={{
        height:'auto',
        marginRight:'20px',
        }}
      variant="ghost"
      size="sm">
      Reset  
      </Button>
      :
      <Loader />
      }
    />
    
    <MessageContainer>
    {errors?.onSubmitError?.message}
    </MessageContainer>
    
    <div>
    
    <Button
    size='md'
    loading={isSubmitting}
    form="form" 
    style={{
    width:'100%',
    marginBottom:'6px'
    }}
    >Edit Details</Button>
    
    <Button
    size='md'
    variant='ghost'
    onClick={()=>logout()}
    form="not-form" 
    rippleColor="rgba(220, 20, 60,.2)"
    style={{
    width:'100%',
    color:'#f83f3f',
    }}
    >Log Out</Button>
    
    </div>
    
    </form>
    </FormContainer>
    
    )
} 

const FormContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: stretch;
     
     width: min(90vw,400px);
     background: #fff;
     
     margin: 1rem auto;
`
const MessageContainer = styled.div`
     color: red;
     text-align: center;
     min-height: 30px;
`