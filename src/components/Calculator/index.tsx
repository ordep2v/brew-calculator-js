import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  useState,
  MouseEvent
} from 'react'
import { densityCorrection } from './tableAlcoolCorrection'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type CalculatorProps = {} & ButtonTypes
const Calculator = ({ ...props }: CalculatorProps) => {
  const [display, setDisplay] = useState(0)
  const [values, setValues] = useState<any>({
    operation: 'ibu-calculator',
    num1: '',
    num2: '',
    num3: '',
    num4: ''
  })
  function mathIbu() {
    let result = 0
    var util = values.num1
    var hopWeight = values.num2
    var alphaAcidUnit = values.num3 / 100
    var beerVolume = values.num4

    result = (util * hopWeight * alphaAcidUnit) / beerVolume
    setDisplay(result)
  }
  function mathAlcoholContent() {
    let result = 0
    var originalGravity = parseFloat(values.num1.toString())
    var originalTemperature = densityCorrection(values.num2.toString()) / 1000
    var finalGravity = parseFloat(values.num3.toString())
    var finalTemperature = densityCorrection(values.num4.toString()) / 1000
    let adjustedOg = 0
    let adjustedFg = 0
    if (values.num2 >= 20) {
      adjustedOg = originalGravity + originalTemperature
    } else {
      adjustedOg = originalGravity - originalTemperature
    }
    if (values.num4 >= 20) {
      adjustedFg = finalGravity + finalTemperature
    } else {
      adjustedFg = finalGravity - finalTemperature
    }
    result = 131.25 * (adjustedOg - adjustedFg)
    console.log(adjustedOg)
    console.log(adjustedFg)
    setDisplay(result)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    console.log(values.operation)
  }

  function calculatorChoose(e: React.ChangeEvent<HTMLSelectElement>) {
    handleChange(e)
    setValues({
      ...values,
      operation: e.target.value,
      num1: '',
      num2: '',
      num3: '',
      num4: ''
    })
    console.log(values.num1)
    setDisplay(0)
  }
  function handleSubmit(e: MouseEvent) {
    e.preventDefault()
    if (values.operation === 'ibu-calculator') {
      mathIbu()
    } else if (values.operation === 'abv-calculator') {
      mathAlcoholContent()
    } else {
    }
  }
  return (
    <>
      <S.SelectDivision>
        <S.SelectOperationText>Choose a calculator: </S.SelectOperationText>
        <div>
          <S.SelectOperation name="operation" onChange={calculatorChoose}>
            <option value="ibu-calculator">IBU Calculator</option>
            <option value="abv-calculator">ABV Calculator</option>
          </S.SelectOperation>
        </div>
      </S.SelectDivision>

      {values.operation === 'ibu-calculator' && (
        <S.Wrapper>
          <S.Text>IBU Calculator</S.Text>
          <S.Displays>
            <S.Display>{display.toFixed(3)}</S.Display>
          </S.Displays>
          <S.FormSite>
            <S.Form>
              <S.Label>Brewer Use</S.Label>
              <S.Input
                value={values.num1}
                type="number"
                name="num1"
                onChange={handleChange}
              ></S.Input>
              <S.Label>
                Hops Weight<b>(mg)</b>
              </S.Label>
              <S.Input
                value={values.num2}
                type="number"
                name="num2"
                onChange={handleChange}
              ></S.Input>
              <S.Label>Alpha Acid Units</S.Label>
              <S.Input
                value={values.num3}
                type="number"
                name="num3"
                onChange={handleChange}
              ></S.Input>
              <S.Label>Volume of Beer</S.Label>
              <S.Input
                value={values.num4}
                type="number"
                name="num4"
                onChange={handleChange}
              ></S.Input>
              {!!values.num1 &&
              !!values.num2 &&
              !!values.num3 &&
              !!values.num4 ? (
                <S.Button role="button" type="submit" onClick={handleSubmit}>
                  =
                </S.Button>
              ) : (
                <S.Button
                  role="button"
                  type="submit"
                  onClick={handleSubmit}
                  disabled
                >
                  =
                </S.Button>
              )}
            </S.Form>
          </S.FormSite>
        </S.Wrapper>
      )}

      {values.operation === 'abv-calculator' && (
        <S.Wrapper>
          <S.Text>ABV Calculator</S.Text>
          <S.Displays>
            <S.Display>{display.toFixed(2)}%</S.Display>
          </S.Displays>
          <S.FormSite>
            <S.Form>
              <S.Label>Original Gravity</S.Label>
              <S.Input
                value={values.num1}
                type="number"
                step="any"
                name="num1"
                onChange={handleChange}
              ></S.Input>
              <S.Label>
                Original Temperature<b>(°C)</b>
              </S.Label>
              <S.Input
                value={values.num2}
                type="number"
                name="num2"
                onChange={handleChange}
              ></S.Input>
              <S.Label>Final Gravity</S.Label>
              <S.Input
                value={values.num3}
                type="number"
                step="any"
                name="num3"
                onChange={handleChange}
              ></S.Input>
              <S.Label>
                Final Temperature<b>(°C)</b>
              </S.Label>
              <S.Input
                value={values.num4}
                type="number"
                name="num4"
                onChange={handleChange}
              ></S.Input>
              {!!values.num1 &&
              !!values.num2 &&
              !!values.num3 &&
              !!values.num4 ? (
                <S.Button role="button" type="submit" onClick={handleSubmit}>
                  =
                </S.Button>
              ) : (
                <S.Button
                  role="button"
                  type="submit"
                  onClick={handleSubmit}
                  disabled
                >
                  =
                </S.Button>
              )}
            </S.Form>
          </S.FormSite>
        </S.Wrapper>
      )}
    </>
  )
}

export default Calculator
