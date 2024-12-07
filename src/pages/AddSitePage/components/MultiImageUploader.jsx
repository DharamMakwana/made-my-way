import { useState,useEffect,useRef } from 'react'

import {Image,Text} from '@mantine/core'

import Camera from '../../../assets/icons/Camera'

import {Row} from '../../../layout-components/Row'
import {Button} from '../../../components/Button'

import styled from 'styled-components'
  
export const MultiImageUploader = ({register,errors,clearErrors,setError,isSubmitSuccessful}) => {
  
  const [urls,setUrls] = useState([])
  
  const onImageChange = (event) => {
  
  clearErrors('multipleImages')
  
  if(event.target.files.length > 9)
  return setError('multipleImages',{type:'too many files',message:'cannot upload more than 9 files'})
  
  setUrls(
  Array
  .from(event.target.files)
  .map(img => URL.createObjectURL(img))
  )
  
  }
  
  const previews = urls?.map((url,i) => (
    <Image 
    key={i}
    radius={5}
    width="100%"
    height="100%"
    src={url}
    withPlaceholder
    />
    ))
  
  useEffect(()=>{
  if (isSubmitSuccessful)
  setUrls(null)
  },[isSubmitSuccessful])
  
  return (
    <Wrapper>
    
    {
    Boolean(urls.length)
		?
    <GridView>
    {previews}
    </GridView>
    :
    <Image 
    height={180}
    radius={3}
    src={null} 
    withPlaceholder/>
    }
    
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
    Other images related to the place.
    </p>
    <p
    style={{
    color: 'var(--lighter-text)',
    fontSize:'var(--para-text)',
    fontWeight:'var(--medium)',
    width:'95%'
    }}
    >
    These images will be shown when an user want to see more details about this place.
    <p 
    style={{
    color: errors?.multipleImages?.message ? '#eba00d':'var(--lighter-text)',
    fontWeight:'var(--bold)'
    }}
    >
    {
    errors?.multipleImages?.message ? `${errors?.multipleImages?.message}`:'You can upload maximum 9 files.'
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
    name='otherImages'
    multiple='multiple'
    accept="image/*"
    {...register('otherimages')}
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

const Wrapper = styled.div`
     padding: .5rem;
     border: 1px solid #ced4da;
     border-radius: 5px;
`

const GridView = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
     gap: .5rem;
`