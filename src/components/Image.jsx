import {useState,useEffect,useRef} from 'react';

import overlay from '../assets/image/overlay.jpg'

import styled from 'styled-components'

const options = {
  root: null,
  rootMargin: '0px',
  threshold: .7,
}

const observerCallback = (entriesArr,observer) => {
  
  const [entries] = entriesArr

  if(entries.isIntersecting){
    entries.target.src = entries.target.dataset.src
  }
  
}

export const Image = ({
  height,width,radius,
  fit,
  src,alt,
  progressive=true
}) => {
  
  const HighResImgRef = useRef(null)
  const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
  if(progressive && HighResImgRef){
    
  const observer = new IntersectionObserver(observerCallback,options)

  observer.observe(HighResImgRef.current)
  
  return () => observer.disconnect()
  }
  },[HighResImgRef])
  
  if(progressive)
  return (
    <ImageWrapper>
    <ImagePlaceholder
    loaded={loaded}
    radius={radius}
    src={overlay}
    />
    <ImageStyle 
    height={height}
    width={width}
       
    radius={radius}
    
    data-src={src}
    alt={alt}
       
    fit={fit}
       
    ref={HighResImgRef}
    
    onLoad={() => setLoaded(true)}
    />
    </ImageWrapper>
    )
    
  return (
    <ImageWrapper>
    <ImageStyle 
    loaded={loaded}
       
    height={height}
    width={width}
       
    radius={radius}
    
    src={src}
    alt={alt}
       
    fit={fit}
    
    onLoad={() => setLoaded(true)}
    />
    </ImageWrapper>
    )
};


const ImageStyle = styled.img`

     object-fit: ${({fit}) => fit ? fit:'cover'};
     height: ${({height}) => height ? height+'px' : '100%'};
     width: ${({width}) => width ? width+'px' : '100%'};
     border-radius: ${({radius}) => radius ? radius+'px':'var(--md-rad)'};
    
     display: block;
`

const ImageWrapper = styled.div`
     position: relative;
     overflow: hidden;
     border-radius: var(--md-rad);
`

const ImagePlaceholder = styled.img`
     position: absolute;
     inset: 0;
     
     object-fit: cover;
     
     display: block;
     filter: blur(30px);
     
     clip-path: inset(0);
     
     opacity: ${({loaded}) => loaded?'0':'1'};
     transition: opacity .2s ease;
     
     border-radius: ${({radius}) => radius ? radius+'px':'var(--md-rad)'};
`