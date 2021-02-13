import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
 clip-path: polygon(0 0, 100% 20%, 100% 150%, 0 150%);
  font-size: 1.4rem;
  color: #1d1d30;
  background-color: #fcfcfc;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.greaterThan('large')`
    padding-top: -20rem;
  `}
  
`

export const Content = styled.div`
  
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Column = styled.div`
  a {
    color: #1d1d30;
    text-decoration: none;
  }
`
export const Socials = styled.nav`
  display: flex;
  justify-content: space-between;
`
export const EachSocial = styled.div`
width: 4rem;
margin-top: 1rem;
`
export const Copyright = styled.div`
font-weight: bolder;
  margin: 1rem 0 1rem 0;
`
