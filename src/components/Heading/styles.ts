import styled, { DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  padding: 2rem 0;
  position: relative;
  background-color: #1d1d30;
  ${media.lessThan('medium')`
  justify-content: center;`}
`

export const Underlined = styled.div`
  margin-top: 0;
  border-bottom-style: solid;
  border-bottom-width: 0.2rem;
  border-bottom-color: transparent;
`
export const MenuNav = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-direction: row;
  height: 5rem;
  > div {
    margin: 0rem 2rem 0rem 2rem;
    &:hover {
      ${Underlined} {
        border-bottom-color: #fcfcfc;
        animation: hoverAnimation 0.3s forwards;

        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }
`

export const MenuLink = styled.a`
  position: relative;
  font-size: 2.0rem;
  text-decoration: none;
  color: #fcfcfc;
  font-weight: bold;
`

export const LogoWrapper = styled.div`
  margin-left: 1rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
