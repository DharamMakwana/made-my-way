import styled from 'styled-components'

export const Overlay = styled.div`
		position: fixed;
		inset: 0;
		
		background: rgba(0,0,0,.8);
		backdrop-filter: blur(15px);
		
		z-index: var(--cloud-7);
`