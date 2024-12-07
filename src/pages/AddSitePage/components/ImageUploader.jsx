import { useState,useEffect,useRef } from 'react'

import {Image,Text} from '@mantine/core'

import Camera from '../../../assets/icons/Camera'

import {Row} from '../../../layout-components/Row'
import {Button} from '../../../components/Button'

import styled from 'styled-components'
  
export const ImageUploader = ({register,errors,clearErrors,setError,isSubmitSuccessful}) => {
  
  const [url,setUrl] = useState()
  
  const onImageChange = (event)=>{
    
    clearErrors('thumbnail')
    
    if(event.target.files[0].size > 10485760)
    return setError('thumbnail',{type:'file size',message:'file is too large, it should be less than 10MB.'})
    
    setUrl(URL.createObjectURL(event.target.files[0]))

  }
  
  useEffect(()=>{
  if (isSubmitSuccessful)
  setUrl(null)
  },[isSubmitSuccessful])
  
  return (
    <Wrapper>
    
    <Image 
    height={url ? "100%":180}
    radius={3}
    src={url}
    withPlaceholder
    />
    
    <Row style={{
      display: 'grid',
      gridTemplateColumns:'auto 50px'
    }}>
    
    <div>
    <p style={{
      fontSize:'var(--title-text)',
      color: 'var(--dark-text)',
      fontWeight:'var(--medium)'
    }}>
    Thumbnail Image
    </p>
    <p
    style={{
    color: 'var(--lighter-text)',
    fontSize:'var(--para-text)',
    fontWeight:'var(--medium)',
    width:'95%'
    }}
    >
    The first image that other users will see make sure it's a good one.
    <p 
    style={{
    color: errors?.thumbnail?.message ? '#eba00d':'var(--lighter-text)',
    fontWeight:'var(--bold)'
    }}
    >
    {
    errors?.thumbnail?.message ? `${errors?.thumbnail?.message}`:'You can upload only one file.'
    }
    </p>
    </p>
    </div>

    <Button 
    size="sm" 
    style={{
      borderRadius:'50%',
      padding:'0px',
      height:'45px',
      aspectRatio:'1/1'
    }}
    >
    <Camera />
    <input 
    type='file' 
    name='thumbnail'
    accept="image/*"
    {...register('thumbnail',{
     required:{
       value: true,
       message:'You have to upload the thumbnail image.'
     }
    })}
    onChange={onImageChange} 
    style={{
    position:'absolute',
    inset:'0',
    opacity:'0',
    zIndex:'2'
    }}
    />
    </Button>
    </Row>
    
    </Wrapper>
    )
}

export const Wrapper = styled.div`
     padding: .5rem;
     border: 1px solid #ced4da;
     border-radius: 5px;
     margin: 1rem 0;
     overflow: hidden;
`