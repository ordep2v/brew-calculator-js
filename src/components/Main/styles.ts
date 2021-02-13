import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  background-color: #1d1d30;
  color: #fff;
  height:100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.greaterThan('large')`
    padding-bottom: 20rem;
  `}
  
`

