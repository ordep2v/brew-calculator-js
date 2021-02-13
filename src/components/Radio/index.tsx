import React from 'react'
import * as S from './styles'

const Radio = ({ ...props }: any) => {
  function imprima(e: MouseEvent) {
    e.preventDefault()
    console.log(props.values)
  }
  return (
    <>
      <S.Wrapper>
        <S.Input id={props.value} type="radio" {...props}></S.Input>
        <S.Label htmlFor={props.value} {...props}>
          {props.values.option === props.value || props.values.option2 === props.value ? (
            <img src="./img/copocheio.png" />
          ) : (
            <img src="./img/copovazio.png" />
          )}
        </S.Label>
      </S.Wrapper>
    </>
  )
}

export default Radio
