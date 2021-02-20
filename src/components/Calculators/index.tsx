import React, { MouseEventHandler, useRef, useState } from 'react'
import { densityCorrection } from './tableAlcoolCorrection'
import * as S from './styles'
import IbuCalculator from './singleCalculator/ibuCalculator'
import AbvCalculator from './singleCalculator/abvCalculator'
import YprCalculator from './singleCalculator/yprCalculator'
import { MaltCalculator } from './singleCalculator/maltCalculator'

interface RefObject {
  maltQuantity: () => void
}

export type CalculatorProps = {
  values?: CalculatorProps
  setDisplay?: React.Dispatch<React.SetStateAction<number>>
  display?: number
  option?: string
  option2?: string
  operation?: string
  num1: number
  num2: number
  num3: number
  num4: number
  handleChange?: React.ChangeEventHandler
  handleReset?: any
  handleSubmit?: any
}

const Calculator = ({ ...props }) => {
  const myRef = useRef<RefObject>(null)

  const [display, setDisplay] = useState<number>(0)
  const [display2, setDisplay2] = useState<number>(0)
  const [values, setValues] = useState<CalculatorProps>({
    option: '',
    option2: '',
    operation: 'ibu-calculator',
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0
  })

  const childRef = useRef()

  // FÓRMULAS DAS CALCULADORAS //
  function mathIbu() {
    let result = 0
    var util = values.num1
    var hopWeight = values.num2
    var alphaAcidUnit = values.num3 / 100
    var beerVolume = values.num4
    result = (util * hopWeight * alphaAcidUnit) / beerVolume
    setDisplay(result)

    console.log('resultado' + result)
  }
  function mathAlcoholContent(...props: any) {
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
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      option: '',
      option2: ''
    })
    console.log(values.num1)
    setDisplay(0)
    setDisplay2(0)
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

  function handleReset() {
     setValues({
      ...values,
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      option: '',
      option2: ''
    })
    setDisplay(0)
    setDisplay2(0)

  }
  function handleSubmit(e: any) {
    e.preventDefault()
    if (values.operation === 'ibu-calculator') {
      mathIbu()
    } else if (values.operation === 'abv-calculator') {
      mathAlcoholContent()
    } else if (values.operation === 'ypr-calculator') {
      if (
        values.num1 != 0 &&
        values.num2 != 0 &&
        e.target.id === 'buttoncells'
      ) {
        console.log(e.target.id)
        mathYeastPitchRate()
      } else if (
        values.num3 != 0 &&
        values.num4 != 0 &&
        e.target.id === 'buttonyeast'
      ) {

        mathWeightYeastPitchRate()
      }
    } else if (values.operation === 'mq-calculator') {
      if (myRef.current) {
  
        myRef.current.maltQuantity()
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
          <option value="mq-calculator">Malt Quantity</option>
        </S.SelectOperation>
      </S.SelectDivision>

      {values.operation === 'ibu-calculator' && (
        <IbuCalculator
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          display={display}
        />
      )}

      {values.operation === 'abv-calculator' && (
        <AbvCalculator
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          display={display}
        />
      )}

      {values.operation === 'ypr-calculator' && (
        <YprCalculator
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          typeChangeYpr={typeChangeYpr}
          display={display}
          display2={display2}
        />
      )}

      {values.operation === 'mq-calculator' && (
        <MaltCalculator
          num1={values.num1}
          num2={values.num2}
          num3={values.num3}
          num4={values.num4}
          ref={myRef}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setDisplay={setDisplay}
          display={display}
          handleReset={handleReset}
        />
      )}
    </>
  )
}

export default Calculator
