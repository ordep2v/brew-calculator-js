import styled from 'styled-components'

export const Wrapper = styled.footer`
padding-top: 5rem;
/* height: 18rem; */
  font-size: 1.4rem;
  color: #fcfcfc;
  background-color: #1d1d30;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
		-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
		box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
`

export const Content = styled.div`

  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export const Column = styled.div`
  a {
    color: #fcfcfc;
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
