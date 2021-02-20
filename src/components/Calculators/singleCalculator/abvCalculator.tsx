import React from 'react'
import * as S from '../styles'

export default function AbvCalculator({...props}) {
  return (
    <S.Wrapper>
    <S.Text>ABV Calculator</S.Text>
    <S.Displays>
      <S.Display>{props.display.toFixed(2)}%</S.Display>
    </S.Displays>
    <S.FormSite>
      <S.Form>
        <S.Label>Original Gravity</S.Label>
        <S.Input
          value={props.values.num1}
          type="number"
          step="any"
          name="num1"
          onChange={props.handleChange}
        ></S.Input>
        <S.Label>
          Original Temperature<b>(°C)</b>
        </S.Label>
        <S.Input
          value={props.values.num2}
          type="number"
          name="num2"
          onChange={props.handleChange}
        ></S.Input>
        <S.Label>Final Gravity</S.Label>
        <S.Input
          value={props.values.num3}
          type="number"
          step="any"
          name="num3"
          onChange={props.handleChange}
        ></S.Input>
        <S.Label>
          Final Temperature<b>(°C)</b>
        </S.Label>
        <S.Input
          value={props.values.num4}
          type="number"
          name="num4"
          onChange={props.handleChange}
        ></S.Input>
        {!!props.values.num1 &&
        !!props.values.num2 &&
        !!props.values.num3 &&
        !!props.values.num4 ? (
          <S.Button role="button" type="submit" onClick={props.handleSubmit}>
            =
          </S.Button>
        ) : (
          <S.Button
            role="button"
            type="submit"
            onClick={props.handleSubmit}
            disabled
          >
            =
          </S.Button>
        )}
      </S.Form>
    </S.FormSite>
  </S.Wrapper>
  )
}