import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react'
import { CalculatorProps } from '..'
import * as S from '../styles'

interface RefObject {
  bitternessMath: () => void
}

export const HopsBitternessCalculator = forwardRef(
  (props: CalculatorProps, ref: Ref<RefObject>) => {
    const [numberMultiInputs, setNumberMultiInputs] = useState({
      inputs: ['multiInputs-0']
    })

    const [multiInputsContent, setMultiInputsContent] = useState<any>([
      { weight: 0, alphaAcids: 0, time: 0 },
      { weight: 0, alphaAcids: 0, time: 0 },
      { weight: 0, alphaAcids: 0, time: 0 },
      { weight: 0, alphaAcids: 0, time: 0 },
      { weight: 0, alphaAcids: 0, time: 0 }
    ])

    const [hopResult, setHopResult] = useState<number[]>([0, 0, 0, 0, 0])
    const [errorText, setErrorText] = useState('')

    function multiInputsAdd(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      var newMultiInputs = [`multiInputs-${numberMultiInputs.inputs.length}`]
      if (numberMultiInputs.inputs.length < 5) {
        let list = numberMultiInputs.inputs.concat(newMultiInputs)
        setNumberMultiInputs({ inputs: list })
      }
    }

    function multiInputsRemove(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      let list = numberMultiInputs.inputs
      if (numberMultiInputs.inputs.length > 1) {
        list.splice(1, 1)
        setNumberMultiInputs({ inputs: list })
      }
    }

    const multiInputsHandleChange = (index: number) => (e: any) => {
      let newArr = [...multiInputsContent]
      let propertyName = e.target.name
      newArr[index][propertyName] = e.target.value

      setMultiInputsContent(newArr)
    }
    function multiArraysHandleReset(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      props.handleReset()
      for (let i = 0; i < numberMultiInputs.inputs.length; i++) {
        multiInputsContent[i].weight = 0
        multiInputsContent[i].alphaAcids = 0
        multiInputsContent[i].time = 0
      }
      setHopResult([0, 0, 0, 0, 0])
      setNumberMultiInputs({ inputs: ['multiInputs-0'] })
    }

    function bitternessMath() {
      if (props.values) {
        var weight = 0
        var alphaAcids = 0
        var time = 0
        let i = 0
        let result = 0
        var originalDensity = props.values.num1
        var finalVolume = props.values.num2
        var timeVarNumber = 0
        const arrayOfResults = [...hopResult]
        for (i = 0; i < numberMultiInputs.inputs.length; i++) {
          weight = multiInputsContent[i].weight
          alphaAcids = multiInputsContent[i].alphaAcids / 100
          time = multiInputsContent[i].time
          if (time >= 40) {
            timeVarNumber = 313
          } else if (time >= 20 && time < 40) {
            timeVarNumber = 238
          } else if (time < 20 && time >= 8) {
            timeVarNumber = 150
          } else {
            setErrorText('"Time" must be >= 8')
          }
          var weightingFactor = 1 + 5 * (originalDensity - 1.05)
          result =
            (timeVarNumber * alphaAcids * weight) /
            (finalVolume * weightingFactor)
          arrayOfResults[i] = result
          setHopResult(arrayOfResults)
        }
      }
    }

    useImperativeHandle(ref, () => ({ bitternessMath }))

    return (
      <>
        <S.Wrapper>
          <S.Text>Hops and Bitterness</S.Text>
          <S.Displays>
            {errorText !== '' && <S.Display>{errorText}</S.Display>}
          </S.Displays>
          <S.FormSite>
            <S.Form>
              {hopResult[0] === 0 &&
              hopResult[1] === 0 &&
              hopResult[2] === 0 &&
              hopResult[3] == 0 &&
              hopResult[4] === 0 ? (
                <S.Table>
                  <S.TableRow>
                    <S.TableHead></S.TableHead>
                    <S.TableHead>Weight(g)</S.TableHead>
                    <S.TableHead>AA's(%)</S.TableHead>
                    <S.TableHead>Time(m)</S.TableHead>
                  </S.TableRow>
                  {numberMultiInputs.inputs.map((input, index) => (
                    <>
                      <S.TableRow key={input[index]} id="input-row">
                        <S.TableData>
                          <S.Label>
                            Hop{index === 0 && ' '}
                            {index + 1}{' '}
                          </S.Label>
                        </S.TableData>
                        <S.TableData>
                          <S.InputHop
                            value={multiInputsContent[index].weight}
                            type="number"
                            step="any"
                            name="weight"
                            onChange={multiInputsHandleChange(index)}
                          ></S.InputHop>
                        </S.TableData>
                        <S.TableData>
                          <S.InputHop
                            value={multiInputsContent[index].alphaAcids}
                            type="number"
                            step="any"
                            name="alphaAcids"
                            onChange={multiInputsHandleChange(index)}
                          ></S.InputHop>
                        </S.TableData>
                        <S.TableData>
                          <S.InputHop
                            value={multiInputsContent[index].time}
                            type="number"
                            step="any"
                            name="time"
                            onChange={multiInputsHandleChange(index)}
                          ></S.InputHop>
                        </S.TableData>
                      </S.TableRow>
                    </>
                  ))}
                  <S.InputButtons>
                    {hopResult[0] !== 0 ||
                    hopResult[1] !== 0 ||
                    hopResult[2] !== 0 ||
                    hopResult[3] !== 0 ||
                    hopResult[4] !== 0 ? (
                      <>
                        <S.ResetButton onClick={multiArraysHandleReset}>
                          RESET
                        </S.ResetButton>
                      </>
                    ) : (
                      <>
                        {' '}
                        <S.InputButtonAdd onClick={multiInputsAdd}>
                          +
                        </S.InputButtonAdd>
                        <S.InputButtonRemove onClick={multiInputsRemove}>
                          -
                        </S.InputButtonRemove>
                      </>
                    )}
                  </S.InputButtons>
                </S.Table>
              ) : (
                <S.Table>
                  <S.TableRow>
                    <S.TableHead></S.TableHead>
                    <S.TableHead className="table-head-answer">
                      <b>W</b>
                    </S.TableHead>
                    <S.TableHead className="table-head-answer">
                      <b>AA</b>
                    </S.TableHead>
                    <S.TableHead className="table-head-answer">
                      <b>T</b>
                    </S.TableHead>
                    <S.TableHead className="blank-space"></S.TableHead>
                    <S.TableHead className="table-head-answer response-header">
                      <b>IBU</b>
                    </S.TableHead>
                  </S.TableRow>
                  {numberMultiInputs.inputs.map((input, index) => (
                    <>
                      <S.TableRow key={input[index]}>
                        <S.TableData>
                          <S.Label>Hop {index + 1} </S.Label>
                        </S.TableData>
                        <S.TableData className="table-data-answer">
                          {multiInputsContent[index].weight}
                        </S.TableData>
                        <S.TableData className="table-data-answer">
                          {multiInputsContent[index].alphaAcids}
                        </S.TableData>
                        <S.TableData className="table-data-answer">
                          {multiInputsContent[index].time}
                        </S.TableData>
                        <S.TableData className="table-data-answer">
                          &rarr;
                        </S.TableData>
                        <S.TableData className="table-data-answer ibu-response">
                          {hopResult[index].toFixed(2)}
                        </S.TableData>
                      </S.TableRow>
                    </>
                  ))}
                </S.Table>
              )}

              {hopResult[0] !== 0 ||
              hopResult[1] !== 0 ||
              hopResult[2] !== 0 ||
              hopResult[3] !== 0 ||
              hopResult[4] !== 0 ? (
                <>
                  <S.Label>Original Density</S.Label>
                  <S.Input
                    value={props.values && props.values.num1}
                    type="number"
                    step="any"
                    required
                    name="num1"
                    disabled
                    onChange={props.handleChange && props.handleChange}
                  ></S.Input>
                  <S.Label>
                    Final Volume<b>(L)</b>
                  </S.Label>
                  <S.Input
                    value={props.values && props.values.num2}
                    type="number"
                    name="num2"
                    required
                    disabled
                    onChange={props.handleChange && props.handleChange}
                  ></S.Input>
                </>
              ) : (
                <>
                  <S.Label>Original Density</S.Label>
                  <S.Input
                    value={props.values && props.values.num1}
                    type="number"
                    step="any"
                    required
                    name="num1"
                    onChange={props.handleChange && props.handleChange}
                  ></S.Input>
                  <S.Label>
                    Final Volume<b>(L)</b>
                  </S.Label>
                  <S.Input
                    value={props.values && props.values.num2}
                    type="number"
                    name="num2"
                    required
                    onChange={props.handleChange && props.handleChange}
                  ></S.Input>
                </>
              )}
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
      </>
    )
  }
)
