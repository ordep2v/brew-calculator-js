import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: .5rem;`
export const Label = styled.label`
  display: block;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  opacity: 0.8;
  > img {
    width: 80%;
  }
  
`
export const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    opacity: 1;
  }
`

export const Form = styled.form``