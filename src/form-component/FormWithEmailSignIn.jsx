import {
  useState,
  useEffect
} from 'react'
import {
  useForm
} from 'react-hook-form'

import {
  SignInWithEmail
} from '../firebase/auth-functions/SignInWithEmail'

import Envelope from '../assets/icons/Envelope'
import Key from '../assets/icons/Lock'
import X from '../assets/icons/Close'

import {
  Input
} from '../components/Input';
import {
  Button
} from '../components/Button';
import {
  Divider
} from '../layout-components/Divider';

import styled from 'styled-components'
import {
  motion
} from 'framer-motion'


export const FormWithEmailSignIn = ({formDisplayMethods,options}) => {

  const [isFetched,
    setIsFetched] = useState(false)
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setError,
    clearErrors
  } = useForm()

  const handleFormSubmit = async (details) => {

    const {
      email,
      password
    } = details

    setIsFetched(true)
    try {
      await SignInWithEmail(email.trim(), password)
      formDisplayMethods.closeForm()
    } 
      catch (e) {
      setError('OnSubmitError', {
        message: e.message
      })
    }
    finally {
      setIsFetched(false)
    }

  }

  return(
    <FormContainer
    transition={{type:'tween'}}
    initial={options.initial}
    animate={options.animate}
      >
    <p style={ {
        fontSize: '35px',
        fontWeight: 'var(--bold)',
        textAlign: 'center' }}
        >
    Sign in
      </p>
    <p style={ {
          fontSize: 'var(--heading-text)',
          color: 'var(--lighter-text)',
          fontWeight: 'var(--medium)',
          textAlign: 'center',
          marginBottom: '30px' }}>
    Sign in with your email here.
      </p>
    <form onSubmit={e => {
      clearErrors()
      handleSubmit(handleFormSubmit)(e)
    }}>
    <Input
          icon={<Envelope size={20} />}
          placeholder="Email"
          name='email'
          register={register}
          />
    <Input
          type="password"
          icon={<Key size={20} />}
          placeholder="Password"
          name='password'
          register={register}
          />
    <p
          style={ {
            color: 'red',
            textAlign: 'center',
            marginBottom: '1.25rem',
          }}
          >
    {errors?.OnSubmitError?.message}
        </p>
    <Button
          style={ { width: '100%' }}
          type="submit"
          loading={isFetched}
          >
    Sign in
    </Button>
      </form>
    <Divider />
    <p style={ {
          textAlign: 'center',
          fontSize: 'var(--title-text)',
          color: 'var(--light-text)',
          wordSpacing: '1px',
          marginTop: '10px' }}>
    Dont have an account?
   <Button
          size="sm"
          variant="ghost"
          onClick={() => formDisplayMethods.openSignUp()}
          style={ {
            padding: '0',
            height: 'auto',
            display: 'inline-block',
            marginLeft: '5px',
          }}
          >
   Sign up
   </Button>
      </p>
    <Button
        size="sm"
        variant="ghost"
        onClick={() => formDisplayMethods.closeForm()}
        style={{
          padding: '0',
          position: 'absolute',
          top: '25px',
          left: '20px',
          transform: 'translate(-50%,-50%)'
        }}
        >
    <X
          color="var(--light-text)"
          size={30} />
    </Button>
     <Button
    size="sm"
    variant="ghost"
    onClick={() => formDisplayMethods.openThirdParty()}
    style={{
    padding:'0',
    position: 'absolute',
    top: '25px',
    right: '0px',
    transform: 'translate(-50%,-50%)'
    }}
    >
    Other
    </Button>
    </FormContainer>
  )
}


const FormContainer = styled(motion.div)`
position: fixed;
bottom: 0%;

background: #fff;
border: 1px solid #dbdbd8;
border-radius: 10px;
padding: 2rem;

width: min(100vw,380px);
z-index: var(--cloud-7);


@media(min-width: 1000px){
    
     	bottom: 25%;
     	left: 35%;
     	
     	transform:translate(-50%,-50%);
     }
`