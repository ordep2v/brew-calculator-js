import React, { useRef, useState } from 'react'
import * as S from './styles'
import { IbuCalculator } from './singleCalculator/ibuCalculator'
import { AbvCalculator } from './singleCalculator/abvCalculator'
import { YprCalculator } from './singleCalculator/yprCalculator'
import { MaltCalculator } from './singleCalculator/maltCalculator'

interface RefObject {
  mathIbu: () => void
  maltQuantity: () => void
  mathAlcoholContent: () => void
  mathWeightYeastPitchRate: () => void
  mathYeastPitchRate: () => void
}

export type CalculatorProps = {
  values?: CalculatorProps
  setDisplay?: React.Dispatch<React.SetStateAction<number>>
  setDisplay2?: React.Dispatch<React.SetStateAction<number>>
  setValues?: React.Dispatch<React.SetStateAction<any>>
  display?: number
  display2?: number
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

const Calculator = () => {
  const myRef = useRef<RefObject>(null)

  const [display, setDisplay] = useState<number>(0)
  const [display2, setDisplay2] = useState<number>(0)
  const [values, setValues] = useState<any>({
    option: '',
    option2: '',
    operation: 'ibu-calculator',
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0
  })


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
      if (!!myRef.current) {
        myRef.current.mathIbu()
      }
    } else if (values.operation === 'abv-calculator') {
      if (myRef.current) {
        console.log('oi')
        myRef.current.mathAlcoholContent()
      }
    } else if (values.operation === 'ypr-calculator') {
      if (
        values.num1 != 0 &&
        values.num2 != 0 &&
        e.target.id === 'buttoncells' &&
        !!myRef.current
      ) {
        myRef.current.mathYeastPitchRate()
      } else if (
        values.num3 != 0 &&
        values.num4 != 0 &&
        e.target.id === 'buttonyeast' &&
        !!myRef.current
      ) {
        myRef.current.mathWeightYeastPitchRate()
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
          num1={values.num1}
          num2={values.num2}
          num3={values.num3}
          num4={values.num4}
          ref={myRef}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          display={display}
          setDisplay={setDisplay}
        />
      )}

      {values.operation === 'abv-calculator' && (
        <AbvCalculator
          num1={values.num1}
          num2={values.num2}
          num3={values.num3}
          num4={values.num4}
          ref={myRef}
          setDisplay={setDisplay}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          display={display}
        />
      )}

      {values.operation === 'ypr-calculator' && (
        <YprCalculator
          num1={values.num1}
          num2={values.num2}
          num3={values.num3}
          num4={values.num4}
          ref={myRef}
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setDisplay={setDisplay}
          display={display}
          display2={display2}
          setDisplay2={setDisplay2}
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
