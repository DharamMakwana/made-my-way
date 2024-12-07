import styled from 'styled-components'

export const SVGcontainer = styled.div`
     position: absolute;
     top: 50%;
     left: 50%;
     
     transform: translate(-50%,-50%);
    
     min-width: 100%;
     
     display: flex;
     flex-direction: column;
     align-items: center;
     
     p{
       font-size: var(--para-text);
       font-weight: var(--medium);
       color: var(--light-text);
       text-align: center;
     }
`