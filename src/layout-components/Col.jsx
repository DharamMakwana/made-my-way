import styled from 'styled-components'

export const Col = styled.div`
     display: flex;
     justify-content: ${({spacing})=> spacing ? spacing : 'space-between'};
     align-items: ${({alignment})=> alignment ? alignment : 'center'};
     flex-direction: column;
     gap: ${({gap})=> gap ? gap+'px' : '0px'};
`