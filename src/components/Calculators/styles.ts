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

  border-top-style: solid;
  border-width: 2px;
  border-color: #000;
`
export const Display = styled.div`
  font-weight: bolder;
  font-size: 1.7rem;
  margin-top: 1rem;
  width: 100%;
`

export const FormSite = styled.div`
  margin-top: 1.2rem;
  width: 100%;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
  padding: 0 0rem 0 0.5rem;
  font-weight: bold;
`
export const InputMalt = styled.input`
  border-color: #000;
  border-width: 2px;
  width: 10rem;
  text-decoration: none;
  border-radius: 5px;
  padding: 0 0rem 0 0.5rem;
  height: 3rem;
  margin-top: 1rem;
  font-weight: bold;
`

export const Text = styled.h3`
  font-weight: bold;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #000;
  font-size: 2.4rem;
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

export const InputButtons = styled.div`
  margin-right: 8rem;
  width: 80%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: end;
  flex-wrap: nowrap;
`
export const ResetButton = styled.button`
  width: 4rem;
  height: 4rem;
  color: #fcfcfc;
  background-color: #7a1515;
  border-radius: 5rem;
  outline-style: none;
  border-color: black;
  margin-top: .5rem;
`

export const InputButtonAdd = styled.button`
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 2rem;
  font-size: 5rem;
  border-width: 0;
  width: 4rem;
  height: 4rem;
  font-weight: bold;
  border-color: black;
  outline-style: none;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #000;
  &:active {
    text-shadow: 0 0 3.5px black, 0 0 0 black;
  }
`
export const InputButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 2rem;
  border-width: 0;
  font-size: 5rem;
  font-weight: bold;
  width: 4rem;
  height: 3.3rem;
  border-color: black;
  color: red;
  outline-style: none;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #000;
  &:active {
    text-shadow: 0 0 3.5px black, 0 0 0 black;
  }
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
  font-size: 1.5rem;
  width: 16rem;
  ${media.lessThan('large')`
  margin-left: 0;`}
`
export const CheckboxDivision = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.2rem;
`
