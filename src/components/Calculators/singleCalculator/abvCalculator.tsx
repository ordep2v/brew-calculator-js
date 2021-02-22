import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react'
import { CalculatorProps } from '..'
import * as S from '../styles'

import { densityCorrection } from '../tableAlcoolCorrection'

interface RefObject {
  mathAlcoholContent: () => void
}

export const AbvCalculator = forwardRef(
  (props: CalculatorProps, ref: Ref<RefObject>) => {

    function mathAlcoholContent() {
      if (props.values && props.setDisplay) {
        let result = 0
        var originalGravity = parseFloat(props.values.num1.toString())
        var originalTemperature =
          densityCorrection(props.values.num2.toString()) / 1000
        var finalGravity = parseFloat(props.values.num3.toString())
        var finalTemperature =
          densityCorrection(props.values.num4.toString()) / 1000
        let adjustedOg = 0
        let adjustedFg = 0
        if (props.values.num2 >= 20) {
          adjustedOg = originalGravity + originalTemperature
        } else {
          adjustedOg = originalGravity - originalTemperature
        }
        if (props.values.num4 >= 20) {
          adjustedFg = finalGravity + finalTemperature
        } else {
          adjustedFg = finalGravity - finalTemperature
        }
        result = 131.25 * (adjustedOg - adjustedFg)
        console.log(adjustedOg)
        console.log(adjustedFg)
        props.setDisplay(result)
      }
    }

    useImperativeHandle(ref, () => ({ mathAlcoholContent }))
    
    return (
      <S.Wrapper>
        <S.Text>ABV Calculator</S.Text>
        <S.Displays>
          <S.Display>{props.display && props.display.toFixed(2)}%</S.Display>
        </S.Displays>
        <S.FormSite>
          <S.Form>
            <S.Label>Original Gravity</S.Label>
            <S.Input
              value={props.values && props.values.num1}
              type="number"
              step="any"
              name="num1"
              onChange={props.handleChange}
            ></S.Input>
            <S.Label>
              Original Temperature<b>(°C)</b>
            </S.Label>
            <S.Input
              value={props.values && props.values.num2}
              type="number"
              name="num2"
              onChange={props.handleChange}
            ></S.Input>
            <S.Label>Final Gravity</S.Label>
            <S.Input
              value={props.values && props.values.num3}
              type="number"
              step="any"
              name="num3"
              onChange={props.handleChange}
            ></S.Input>
            <S.Label>
              Final Temperature<b>(°C)</b>
            </S.Label>
            <S.Input
              value={props.values && props.values.num4}
              type="number"
              name="num4"
              onChange={props.handleChange}
            ></S.Input>
            {!!props.values &&
            !!props.values.num1 &&
            !!props.values.num2 &&
            !!props.values.num3 &&
            !!props.values.num4 ? (
              <S.Button
                role="button"
                type="submit"
                onClick={props.handleSubmit}
              >
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
)
