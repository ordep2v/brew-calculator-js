import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #353332;
  color: #fcfcfc;
  border-style: solid;
  border-width: 3px;
  border-color: #000;
  border-radius: 5px;
  width: 30rem;
  height: 100%;
`

export const Displays = styled.div`
  width: 100%;

  border-bottom-style: solid;
  border-width: 2px;
  border-color: #000;
`
export const Display = styled.div`
  font-weight: bolder;
  font-size: 1.7rem;
  margin-top: 1rem;
`

export const FormSite = styled.div`
  margin-top: 1.2rem;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: -0.5rem;
  font-size: 1.5rem;
`

export const Input = styled.input`
  border-color: #000;
  border-width: 2px;
  text-decoration: none;
  border-radius: 5px;
  height: 3.5rem;
  margin-top: 0.2rem;
`

export const Text = styled.h3`
  font-weight: bold;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #000;
  font-size: 2.2rem;
  margin-top: 1rem;
`

export const Button = styled.button`
  margin: 2rem 0 2rem 0;
  width: 6rem;
  height: 6rem;
  font-size: 3rem;
  background: #3cd3c1;
  border-color: #353332;
  border-radius: 5px;
  color: #fcfcfc;
`
export const SelectDivision = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 3rem;
`

export const SelectOperationText = styled.div`
  font-size: 1.8rem;
`
export const SelectOperation = styled.select`
  border-style: solid;
  border-width: 0.2px;
  border-color: #fcfcfc;
  border-radius: 5px;
  margin-left: 2rem;
  font-weight: bold;
  color: #fcfcfc;
  background-color: #1d1d30;
  font-size: 1.8rem;
  width: 15rem;
  ${media.lessThan('large')`
  margin-left: 0;`}
`
