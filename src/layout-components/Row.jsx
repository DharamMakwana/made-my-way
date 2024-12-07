import styled from 'styled-components'

export const Row = styled.div`
     display: flex;
     justify-content: ${({spacing})=> spacing ? spacing : 'space-between'};
     align-items: ${({alignment})=> alignment ? alignment : 'center'};
     gap: ${({gap})=> gap ? gap+'px' : '0px'};
`