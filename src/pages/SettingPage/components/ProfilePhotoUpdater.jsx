import {useState} from 'react'
import {useAuthContext}  from '../../../context/AuthContext'
import axios from 'axios'

import { updateUserCredentials } from '../../../firebase/firestore-functions/updateUserCredentials'

import { makeFormData } from '../../../utils/makeFormData'
import { cloudinaryURL } from '../../../data/constant'

import {Image} from '../../../components/Image'
import {Loader} from '../../../components/Loader'
import {Button} from '../../../components/Button'

import newuser from '../../../assets/image/newuser.jpeg'

import styled from 'styled-components'

import Pencil from '../../../assets/icons/Pencil'

export const ProfilePhotoUpdater = () => {
  
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const userInfo = useAuthContext()

  
  const handleChange = async (e) => {
    if(e.target.files[0].size > 10485760)
    return setError('file is too large, it should be less than 10MB')
    if(e.target.files[0].type !== 'image/jpeg')
    return setError('file is not an image')
  
   const formDataObj = {
    upload_preset: 'Anshul',
    cloud_name: 'dvpjtayzu'
   }
   
   const data = makeFormData({
      ...formDataObj,
      file: e.target.files[0],
      folder: `users/${userInfo.uid}/profiles`
    })
  
    try {
    setError('')
    setLoading(true)
    
    const {data:{url}} = await axios.post(`${cloudinaryURL}`,data)
    
     await updateUserCredentials({photoUrl: url},userInfo.uid)
    } catch (e) {
      setError(e.message)
    }
    finally{
      setLoading(false)
    }
    
  } 
  
  return (
    <ProfilePhotoWrapper>
    
    <div style={{
    position:'relative',
    display:'grid'}}>
    
    <Image 
    height={105}
    width={105}
    radius={100} 
    src={userInfo.photoUrl || newuser}
    progressive={false}
    />
    
    <Button 
    size="sm" 
    loading={loading}
    style={{
      position: 'absolute',
      top: '70%',
      right: '0%',
      
      transform: 'scale(.65)',
      
      border: '3px solid #fff',
      borderRadius:'50%',
      
      padding:'0',
      aspectRatio:'1/1'
    }}
    >
    <input 
    style={{
    position:'absolute',
    inset:'0',
    opacity:'0',
    zIndex: '3'
    }} 
    type='file'
    onChange={handleChange}
    />
    <Pencil/>
    </Button>
    
    </div>
    
    <p 
    style={{
      fontSize: 'var(--heading-text)',
      fontWeight: 'var(--medium)',
      color:'var(--dark-text)'
    }}>{userInfo.displayName || 'Display Name'}</p>
    
    <p 
    style={{
      fontSize: 'var(--para-text)',
      fontWeight: 'var(--medium)',
      color:'#f43131'
    }}>{error}</p>
    
    </ProfilePhotoWrapper>
    )
}
    
const ProfilePhotoWrapper = styled.div`
     padding: 1.75rem 1rem;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 2rem;
     overflow: hidden;
`
