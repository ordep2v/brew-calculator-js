import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  useState,
  MouseEvent
} from 'react'
import { densityCorrection } from './tableAlcoolCorrection'
import * as S from './styles'
import Radio from 'components/Radio'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type CalculatorProps = {
} & ButtonTypes

const Calculator = ({ ...props }: CalculatorProps) => {

  const [display, setDisplay] = useState(0)
  const [display2, setDisplay2] = useState(0)
  const [values, setValues] = useState<any>({
    option: 'ale',
    option2: 'dry',
    operation: 'ibu-calculator',
    num1: '',
    num2: '',
    num3: '',
    num4: ''
  })
  
  // FÓRMULAS DAS CALCULADORAS //
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

  function mathYeastPitchRate() {
    let result = 0
    var option = values.option
    var volume = parseFloat(values.num1.toString())
    var wortGravity = parseFloat(values.num2.toString())
    var targetPitchRate = 0
    if (option === 'ale') {
      targetPitchRate = 187500
    } else if (option === 'lager') {
      targetPitchRate = 375000
    }

    result = targetPitchRate * volume * (wortGravity - 1.0)
    setDisplay(result)
  }
  function mathWeightYeastPitchRate() {
    let result = 0
    var cellsNumber = parseFloat(values.num3.toString())
    var efficiency = parseFloat(values.num4.toString())
    if (values.option2 === 'liquid') {
      result = cellsNumber / (10000 * (efficiency / 100))
    } else if (values.option2 === 'dry') {
      result = cellsNumber / (19000 * (efficiency / 100))
    }
    setDisplay2(result)
  }
  // FIM DAS FÓRMULAS //

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

  function typeChangeYpr(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.name === 'option') {
      setValues({
        ...values,
        option: e.target.value
      })
    } else if (e.target.name === 'option2') {
      setValues({
        ...values,
        option2: e.target.value
      })
    }
    console.log(values.option)
    console.log(values.option2)
  }
  function handleSubmit(e: MouseEvent) {
    e.preventDefault()
    if (values.operation === 'ibu-calculator') {
      mathIbu()
    } else if (values.operation === 'abv-calculator') {
      mathAlcoholContent()
    } else if (values.operation === 'ypr-calculator') {
      if (values.num1 != '' && values.num2 != '') {
        console.log('eeei')
        mathYeastPitchRate()
      } else if(values.num3 != '' && values.num4 != ''){
        console.log('oi')
        mathWeightYeastPitchRate()
      }
    } else {
    }
  }
  return (
    <>
      <S.SelectDivision>
        <S.SelectOperationText>Choose a calculator: </S.SelectOperationText>

        <S.SelectOperation name="operation" onChange={calculatorChoose}>
          <option value="ibu-calculator">IBU Calculator</option>
          <option value="abv-calculator">Alcohol By Volume</option>
          <option value="ypr-calculator">Yeast Pitch Rate</option>
        </S.SelectOperation>
      </S.SelectDivision>

      {values.operation === 'ibu-calculator' && (
        <S.Wrapper>
          <S.Text>IBU Calculator</S.Text>
          <S.Displays>
            <S.Display>{display.toFixed(3)}</S.Display>
          </S.Displays>
          <S.FormSite>
            <S.Form>
              <S.Label>Hop Utilization<b>(%)</b></S.Label>
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
      {/* other */}

      {values.operation === 'ypr-calculator' && (
        <S.Wrapper>
          <S.Text>Yeast Pitch Rate</S.Text>
          <S.Displays>
            <S.Display>
              Cells Number ={' '}
              {display.toFixed(6).replace('.', ' ').replace('000000', 'bi')}
            </S.Display>
          </S.Displays>
          <S.FormSite>
            <S.Form>
              <S.Label>Choose a beer type:</S.Label>
              <S.CheckboxDivision>
                <S.Label>
                  <Radio
                    values={values}
                    name="option"
                    value="ale"
                    onChange={typeChangeYpr}
                  />
                  Ale
                </S.Label>
                <S.Label>
                  <Radio
                    values={values}
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
                value={values.num1}
                type="number"
                name="num1"
                onChange={handleChange}
              ></S.Input>
              <S.Label>Wort Gravity</S.Label>
              <S.Input
                value={values.num2}
                type="number"
                step="any"
                name="num2"
                onChange={handleChange}
              ></S.Input>
              {!!values.num1 && !!values.num2 && values.option ? (
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
          <S.Displays>
            <S.Display>Yeast Weight = {display2}g</S.Display>
          </S.Displays>
          <S.FormSite>
            <S.Form>
              <S.Label>Choose a yeast type:</S.Label>
              <S.CheckboxDivision>
                <S.Label>
                  <Radio
                    values={values}
                    name="option2"
                    value="dry"
                    onChange={typeChangeYpr}
                  />
                  Dry
                </S.Label>
                <S.Label>
                  <Radio
                    values={values}
                    name="option2"
                    value="liquid"
                    onChange={typeChangeYpr}
                  />
                  Liquid
                </S.Label>
              </S.CheckboxDivision>
              <S.Label>Cells Number</S.Label>
              <S.Input
                value={values.num3}
                type="number"
                name="num3"
                onChange={handleChange}
              ></S.Input>
              <S.Label>
                Efficiency<b>(%)</b>
              </S.Label>
              <S.Input
                value={values.num4}
                type="number"
                step="any"
                name="num4"
                onChange={handleChange}
              ></S.Input>
              <S.Button role="button" type="submit" onClick={handleSubmit}>
                =
              </S.Button>
            </S.Form>
          </S.FormSite>
        </S.Wrapper>
      )}
    </>
  )
}

export default Calculator
