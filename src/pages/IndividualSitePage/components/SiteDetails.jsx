import { useGetDoc } from '../../../hooks/useGetDoc'

import {Badge,Group} from '@mantine/core'
import {Loader} from  '../../../components/Loader'
import {Image} from  '../../../components/Image'

import {Row} from  '../../../layout-components/Row'
import {Col} from  '../../../layout-components/Col'
import { SplashScreen } from '../../../layout-components/SplashScreen'

import Location from '../../../assets/icons/Location'

import styled from 'styled-components'

const features = (array) => {
  return (
    array.map(label => {
    const [emoji,name] = label.split(' ')
    return (
    <Badge
    style={{
    fontWeight:'var(--medium)',
    fontSize:'var(--para-text)'
    }}
    color='gray'
    key={name}
    leftSection={emoji}
    >
    {name}
    </Badge>
      )
    })
    )
}

export const SiteDetails = ({
  placename,
  cityname,
  createdby,
  labels,
  likescounter
}) => {
  
  const {data} = useGetDoc('Users',createdby)
  
  if(!data)
  return (
  <SplashScreen 
  allTheWayUp={false}
  />
  )
  
  if(data)
  return (
    <Col 
    alignment="stretch"
    gap={10}
    >
    
    <Row>
    <Col alignment="start">
    <p style={{
      fontSize:'var(--pagetitle-text)',
      fontWeight:'var(--bold)'
    }}>{placename}</p>
    <p style={{
      fontSize:'var(--para-text)',
      fontWeight:'var(--medium)',
      color: 'var(--lighter-text)'
    }}>{`Posted By: ${data?.displayName}`}</p>
    </Col>
    <Image 
    src={data?.photoUrl}
    radius={50}
    height={30}
    width={30}
    progressive={false}
    />  
    </Row>
    
    <Row>
    <Row gap={2}>
    <Location/>
    <p style={{
      fontSize:'var(--body-text)',
      fontWeight:'var(--medium)',
      color: 'var(--dark-text)'
      
    }}>{cityname}</p>
    </Row>
    
    <Row 
    gap={2}
    style={{padding:'0 5px'}}>
    <p style={{
      fontSize:'var(--para-text)',
      fontWeight:'var(--bold)',
      color: '#ef4779'
    }}>Likes:</p>
    <p style={{
      fontSize:'var(--body-text)',
      fontWeight:'var(--medium)',
      color: 'var(--light-text)'
    }}>
    {likescounter<10?'0'+likescounter:''+likescounter}
    </p>
    </Row>
    
    </Row>
    
    <Group 
    spacing={5}>
    {features(labels)}
    </Group>
    </Col>
    )
}
