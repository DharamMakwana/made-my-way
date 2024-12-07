import styled from 'styled-components'

export const Divider = ({space,label,visible=true}) => {
  return (
    <DividerStyle 
    label={label} 
    space={space}
    visible={visible}
    >
    
    { 
    label 
    && 
    <LabelForDivider>
    {label}
    </LabelForDivider> 
    }
    
    </DividerStyle> 
    
    )
}

const DividerStyle = styled.div`
     width: 95%;
     height: 1px;
     background: #ced4da;
     margin: ${({space})=>space?space+'px':'8px'} auto;
     
     position: relative;
     visibility: ${({visible}) => visible ? 'visible':'hidden'}
  
`

const LabelForDivider = styled.p`

      font-size: var(--body-text);
  
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform:translate(-50%,-50%);
      
      background: #fff;
      color: var(--light-text);
    
      height: 15px;
      padding: 0 10px;
      
      border-radius: 20px;
      
      display: grid;
      place-items: center;
      
     }

`