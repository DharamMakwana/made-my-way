import {useState,useCallback} from 'react'
import {Image} from '../../../components/Image'

import NavArrow from '../../../assets/icons/NavArrow'

import styled from 'styled-components'

const Slides = ({url,move}) => {
  return (
    <SlidesWrapper 
    move={move}
    >
    <Image
    src={url} 
    radius={7}
    />
    </SlidesWrapper>
    )
}



export const Carousel = ({images}) => {
  
  const [index,setIndex] = useState(0)
  const length = images.length

  const prev = useCallback(() => setIndex((p) => p==0 ? length-1 : p-1),[])
  const next = useCallback(() => setIndex((p) => p==length-1 ? 0 : p+1),[])

  return (
    <Slider>
    
    {images.map((url,i) => (<Slides 
      move={i-index} 
      key={i} 
      url={url}
      />)
    )}
      
    <DotsWrapper>
    {images.map((_,i) => 
      <Dots className={i === index ? 'active-dot':''} key={i}/>)}
    </DotsWrapper>
    
    <ControlButton 
    onClick={prev}
    >
    <NavArrow 
    style={{
    transform:'rotate(180deg)'
    }}
    />
    </ControlButton>
    
    <ControlButton 
    onClick={next}
    right={true}>
    <NavArrow />
    </ControlButton>
    
    </Slider>
    )
}


const Slider = styled.div`
     position: relative;
     
     width: 100%;
     max-width: 600px;
     
     height: 23rem;
     max-height: 338px;
     
     margin: 0 auto;
     margin-bottom: 8px;
     
     overflow: hidden;
     border-radius: 7px;
     

`
const SlidesWrapper = styled.div`
     position: absolute;
     top: 0;
     
     min-width: 100%;
     min-height: 23rem;
     
     display: flex;
     align-items: center;
     justify-content: center;
     
     will-change: transform;
     backface-visibility: hidden;
     
     transition: transform .5s;
     transform: translate3d(${({move})=>move*100}%,0,0);
`

const Dots = styled.div`
     height: 3.5px;
     width: 3.5px;
     border-radius: 80%;
     background: rgba(173,173,173,.8);
     transition: transform .5s ease;
`

const DotsWrapper = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 5px;
     
     position: absolute;
     left: 50%;
     top: 90%;
     transform: translate(-50%,-50%);
  
     height: 9px;
     max-width: 85px;
     padding: .2rem .5rem;
     
     overflow: hidden;
     border-radius: 5px;
     background: rgba(173,173,173,.4);
     
     .active-dot{
       background: rgba(173,173,173,.9);
       transform: scale(1.75);
     }
`

const ControlButton = styled.button`
     border: none;
     border-radius: 50%;
     
     width: 23px;
     aspect-ratio: 1/1;
     
     display: grid;
     place-items: center;
     
     background: rgba(173,173,173,.5);
     color: white;
     
     position: absolute;
     top: 50%;
     left: ${({right}) => right ? '95%':'5%'};
     transform: translate(-50%,-50%);
`
