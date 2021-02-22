import Radio from 'components/Radio'
import { Console } from 'console'
import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react'
import { CalculatorProps } from '..'
import * as S from '../styles'

interface RefObject {
  mathWeightYeastPitchRate: () => void
  mathYeastPitchRate: () => void
}
export const YprCalculator = forwardRef(
  (props: CalculatorProps, ref: Ref<RefObject>) => {
    function mathYeastPitchRate() {
      if (props.values && props.setDisplay) {
        let result = 0
        var option = props.values.option
        var volume = parseFloat(props.values.num1.toString())
        var wortGravity = parseFloat(props.values.num2.toString())
        var targetPitchRate = 0
        if (option === 'ale') {
          targetPitchRate = 187500
        } else if (option === 'lager') {
          targetPitchRate = 375000
        }

        result = targetPitchRate * volume * (wortGravity - 1.0)
        props.setDisplay(result)
      }
    }
    function mathWeightYeastPitchRate() {
      if (props.values && props.setDisplay2) {
        let result = 0
        var cellsNumber = parseFloat(props.values.num3.toString())
        var efficiency = parseFloat(props.values.num4.toString())
        if (props.values.option2 === 'liquid') {
          result = cellsNumber / (10000 * (efficiency / 100))
        } else if (props.values.option2 === 'dry') {
          result = cellsNumber / (19000 * (efficiency / 100))
        }

        props.setDisplay2(result)
      }
    }
    function typeChangeYpr(e: React.ChangeEvent<HTMLSelectElement>) {
      if (e.target.name === 'option') {
        if (!!props.setValues) {
          props.setValues({
            ...props.values,
            option: e.target.value
          })
        }
      } else if (e.target.name === 'option2') {
        if (!!props.setValues) {
          props.setValues({
            ...props.values,
            option2: e.target.value
          })
        }
      }
      console.log(props.values && props.values.option)
      console.log(props.values && props.values.option2)
    }
    useImperativeHandle(ref, () => ({ mathWeightYeastPitchRate, mathYeastPitchRate }))
    return (
      <S.Wrapper>
        <S.Text>Yeast Pitch Rate</S.Text>
        <S.Displays>
          <S.Display>
            Cells Number ={' '}
            {props.display &&
              props.display
                .toFixed(6)
                .replace('.', ' ')
                .replace('000000', 'bi')}
          </S.Display>
        </S.Displays>
        <S.FormSite>
          <S.Form>
            <S.Label>Choose a beer type:</S.Label>
            <S.CheckboxDivision>
              <S.Label>
                <Radio
                  values={props.values}
                  name="option"
                  value="ale"
                  onChange={typeChangeYpr}
                />
                Ale
              </S.Label>
              <S.Label>
                <Radio
                  values={props.values}
                  name="option"
                  value="lager"
                  onChange={typeChangeYpr}
                />
                Lager
              </S.Label>
            </S.CheckboxDivision>
            <S.Label>
              Wort Volume<b>(L)</b>
            </S.Label>
            <S.Input
              value={props.values && props.values.num1}
              type="number"
              name="num1"
              onChange={props.handleChange}
            ></S.Input>
            <S.Label>Wort Gravity</S.Label>
            <S.Input
              value={props.values && props.values.num2}
              type="number"
              step="any"
              name="num2"
              onChange={props.handleChange}
            ></S.Input>
            {props.values &&
            !!props.values.num1 &&
            !!props.values.num2 &&
            props.values.option ? (
              <S.Button
                id="buttoncells"
                role="button"
                type="submit"
                onClick={props.handleSubmit}
              >
                =
              </S.Button>
            ) : (
              <S.Button
                id="buttoncells"
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
        <S.Displays>
          <S.Display>Yeast Weight = {props.display2}g</S.Display>
        </S.Displays>
        <S.FormSite>
          <S.Form>
            <S.Label>Choose a yeast type:</S.Label>
            <S.CheckboxDivision>
              <S.Label>
                <Radio
                  values={props.values}
                  name="option2"
                  value="dry"
                  onChange={typeChangeYpr}
                />
                Dry
              </S.Label>
              <S.Label>
                <Radio
                  values={props.values}
                  name="option2"
                  value="liquid"
                  onChange={typeChangeYpr}
                />
                Liquid
              </S.Label>
            </S.CheckboxDivision>
            <S.Label>Cells Number</S.Label>
            <S.Input
              value={props.values && props.values.num3}
              type="number"
              name="num3"
              onChange={props.handleChange}
            ></S.Input>
            <S.Label>
              Efficiency<b>(%)</b>
            </S.Label>
            <S.Input
              value={props.values && props.values.num4}
              type="number"
              step="any"
              name="num4"
              onChange={props.handleChange}
            ></S.Input>
            {props.values &&
            !!props.values.num3 &&
            !!props.values.num4 &&
            props.values.option2 ? (
              <S.Button
                id="buttonyeast"
                role="button"
                type="submit"
                onClick={props.handleSubmit}
              >
                =
              </S.Button>
            ) : (
              <S.Button
                id="buttonyeast"
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
