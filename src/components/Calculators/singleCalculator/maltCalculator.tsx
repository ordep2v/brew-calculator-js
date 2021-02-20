import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react'
import { CalculatorProps } from '..'
import * as S from '../styles'

interface RefObject {
  maltQuantity: () => void
}

export const MaltCalculator = forwardRef(
  (props: CalculatorProps, ref: Ref<RefObject>) => {
    const [numberInputs, setNumberInputs] = useState({ inputs: ['input-0'] })
    const [inputContent, setInputContent] = useState({
      input1: 100,
      input2: 0,
      input3: 0,
      input4: 0,
      input5: 0
    })
    const [maltShareResult, setMaltShareResult] = useState({
      share1: 0,
      share2: 0,
      share3: 0,
      share4: 0,
      share5: 0
    })
    const [errorText, setErrorText] = useState('')

    function inputAdd(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      var newInput = `input-${numberInputs.inputs.length}`
      if (numberInputs.inputs.length < 5) {
        let list = numberInputs.inputs.concat([newInput])
        setNumberInputs({ inputs: list })
      }
     
    }
    function inputRemove(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      let list = numberInputs.inputs
      if (numberInputs.inputs.length > 1) {
        list.splice(1, 1)
        setNumberInputs({ inputs: list })
      }
  
    }
    function maltShare(display: number): void {
      if (display) {
        var totalMalt = display
        var totalPercent =
          inputContent.input1 +
          inputContent.input2 +
          inputContent.input3 +
          inputContent.input4 +
          inputContent.input5
        if (totalPercent <= 100) {
          var firstPercent = (inputContent.input1 / 100) * totalMalt
          var firstPercent = (inputContent.input1 / 100) * totalMalt
          var secondPercent = (inputContent.input2 / 100) * totalMalt
          var thirdPercent = (inputContent.input3 / 100) * totalMalt
          var fourthPercent = (inputContent.input4 / 100) * totalMalt
          var fifthPercent = (inputContent.input5 / 100) * totalMalt
          setMaltShareResult({
            share1: firstPercent,
            share2: secondPercent,
            share3: thirdPercent,
            share4: fourthPercent,
            share5: fifthPercent
          })
        } else {
          setErrorText('Sum of (%) must be <= 100%')
   
        }
      } else {
        setErrorText('Original Density must be > 1')
      }
    }
    function maltQuantity(): void {
      if (props.values && props.setDisplay) {
        let result = 0
        var beerVolume = props.values.num1
        var originalDensity = props.values.num2
        result = 5.0 * beerVolume * (originalDensity - 1.0)
        props.setDisplay(result)
        maltShare(result)
      } else {
        console.log('erro aqui')
      }
    }

    function maltHandleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      setInputContent({ ...inputContent, [e.target.name]: e.target.value })
      console.log([inputContent])
    }

    function thisHandleReset(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      props.handleReset()
      setNumberInputs({ inputs: ['input-0'] })
      setInputContent({
        input1: 100,
        input2: 0,
        input3: 0,
        input4: 0,
        input5: 0
      })
      setMaltShareResult({
        share1: 0,
        share2: 0,
        share3: 0,
        share4: 0,
        share5: 0
      })
      setErrorText('')
    }
    function inputValueChange(index: number): number {
      switch (index) {
        case 0:
          return inputContent.input1
          break
        case 1:
          return inputContent.input2
          break
        case 2:
          return inputContent.input3
          break
        case 3:
          return inputContent.input4
          break
        case 4:
          return inputContent.input5
          break
        default:
          return index
      }
    }
    useImperativeHandle(ref, () => ({ maltQuantity }))

    return (
      <>
        {props.display === 0 ? (
          <S.Wrapper>
            <S.Text>Malt Quantity</S.Text>
            <S.Displays>
              {props.display != null && errorText === '' && (
                <S.Display>Total: {props.display.toFixed(2)} Kg</S.Display>
              )}
              {errorText !== '' && <S.Display>{errorText}</S.Display>}
            </S.Displays>
            <S.FormSite>
              <S.Form>
                <S.Label>Variety of Malt</S.Label>
                {maltShareResult.share1 !== 0 && (
                  <S.Label>
                    Malt 1{' '}
                    <b>
                      ({inputContent.input1}%) =&gt;{' '}
                      {maltShareResult.share1.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share2 !== 0 && (
                  <S.Label>
                    Malt 2{' '}
                    <b>
                      ({inputContent.input2}%) =&gt;{' '}
                      {maltShareResult.share2.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share3 !== 0 && (
                  <S.Label>
                    Malt 3{' '}
                    <b>
                      ({inputContent.input3}%) =&gt;{' '}
                      {maltShareResult.share3.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share4 !== 0 && (
                  <S.Label>
                    Malt 4{' '}
                    <b>
                      ({inputContent.input4}%) =&gt;{' '}
                      {maltShareResult.share4.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share5 !== 0 && (
                  <S.Label>
                    Malt 5{' '}
                    <b>
                      ({inputContent.input5}%) =&gt;{' '}
                      {maltShareResult.share5.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}

                {maltShareResult.share1 === 0 &&
                  maltShareResult.share2 === 0 &&
                  maltShareResult.share3 === 0 &&
                  maltShareResult.share4 === 0 &&
                  props.display === 0 &&
                  numberInputs.inputs.map((input, index) => (
                    <S.Label key={input[index]}>
                      Malt {index + 1} <b>(%)</b>{' '}
                      <S.InputMalt
                        value={inputValueChange(index)}
                        type="number"
                        step="any"
                        name={`input${index + 1}`}
                        onChange={maltHandleChange}
                        required
                      ></S.InputMalt>
                    </S.Label>
                  ))}
                <S.InputButtons>
                  {props.display === 0 && (
                    <>
                      {' '}
                      <S.InputButtonAdd onClick={inputAdd}>+</S.InputButtonAdd>
                      <S.InputButtonRemove onClick={inputRemove}>
                        -
                      </S.InputButtonRemove>
                    </>
                  )}
                  {props.display != 0 && (
                    <>
                      <button onClick={thisHandleReset}>RST</button>
                    </>
                  )}
                </S.InputButtons>
                <S.Label>Beer Volume</S.Label>
                <S.Input
                  value={props.values && props.values.num1}
                  type="number"
                  step="any"
                  required
                  name="num1"
                  onChange={props.handleChange && props.handleChange}
                ></S.Input>
                <S.Label>Original Density</S.Label>
                <S.Input
                  value={props.values && props.values.num2}
                  type="number"
                  name="num2"
                  required
                  onChange={props.handleChange && props.handleChange}
                ></S.Input>
                {props.values && !!props.values.num1 && !!props.values.num2 ? (
                  <S.Button
                    role="button"
                    type="submit"
                    onClick={props.handleSubmit && props.handleSubmit}
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
        ) : (
          <S.Wrapper>
            <S.Text>Malt Quantity</S.Text>
            <S.Displays>
              {props.display != null && errorText === '' && (
                <S.Display>Total: {props.display.toFixed(2)} Kg</S.Display>
              )}
              {errorText && <S.Display>Err: {errorText}</S.Display>}
            </S.Displays>
            <S.FormSite>
              <S.Form>
                <S.Label>Variety of Malt</S.Label>
                {errorText && <S.Label>{errorText}</S.Label>}
                {maltShareResult.share1 !== 0 && (
                  <S.Label>
                    Malt 1{' '}
                    <b>
                      ({inputContent.input1}%) =&gt;{' '}
                      {maltShareResult.share1.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share2 !== 0 && (
                  <S.Label>
                    Malt 2{' '}
                    <b>
                      ({inputContent.input2}%) =&gt;{' '}
                      {maltShareResult.share2.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share3 !== 0 && (
                  <S.Label>
                    Malt 3{' '}
                    <b>
                      ({inputContent.input3}%) =&gt;{' '}
                      {maltShareResult.share3.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share4 !== 0 && (
                  <S.Label>
                    Malt 4{' '}
                    <b>
                      ({inputContent.input4}%) =&gt;{' '}
                      {maltShareResult.share4.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}
                {maltShareResult.share5 !== 0 && (
                  <S.Label>
                    Malt 5{' '}
                    <b>
                      ({inputContent.input5}%) =&gt;{' '}
                      {maltShareResult.share5.toFixed(2)} Kg
                    </b>
                  </S.Label>
                )}

                {maltShareResult.share1 === 0 &&
                  maltShareResult.share2 === 0 &&
                  maltShareResult.share3 === 0 &&
                  maltShareResult.share4 === 0 &&
                  props.display === 0 &&
                  numberInputs.inputs.map((input, index) => (
                    <S.Label key={input[index]}>
                      Malt {index + 1} <b>(%)</b>{' '}
                      <S.InputMalt
                        value={inputValueChange(index)}
                        type="number"
                        step="any"
                        name={`input${index + 1}`}
                        onChange={maltHandleChange}
                        required
                      ></S.InputMalt>
                    </S.Label>
                  ))}
                <S.InputButtons>
                  {props.display === 0 && (
                    <>
                      {' '}
                      <S.InputButtonAdd onClick={inputAdd}>+</S.InputButtonAdd>
                      <S.InputButtonRemove onClick={inputRemove}>
                        -
                      </S.InputButtonRemove>
                    </>
                  )}
                  {props.display != 0 && (
                    <>
                      <button onClick={thisHandleReset}>RST</button>
                    </>
                  )}
                </S.InputButtons>
                <S.Label>Beer Volume</S.Label>
                <S.Input
                  value={props.values && props.values.num1}
                  type="number"
                  step="any"
                  required
                  name="num1"
                  onChange={props.handleChange && props.handleChange}
                  disabled
                ></S.Input>
                <S.Label>Original Density</S.Label>
                <S.Input
                  value={props.values && props.values.num2}
                  type="number"
                  name="num2"
                  required
                  disabled
                  onChange={props.handleChange && props.handleChange}
                ></S.Input>

                <S.Button
                  role="button"
                  type="submit"
                  onClick={props.handleSubmit && props.handleSubmit}
                >
                  =
                </S.Button>
              </S.Form>
            </S.FormSite>
          </S.Wrapper>
        )}
      </>
    )
  }
)
