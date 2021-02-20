import Radio from 'components/Radio'
import React from 'react'
import * as S from '../styles'

export default function YprCalculator({ ...props }) {
  return (
    <S.Wrapper>
      <S.Text>Yeast Pitch Rate</S.Text>
      <S.Displays>
        <S.Display>
          Cells Number ={' '}
          {props.display.toFixed(6).replace('.', ' ').replace('000000', 'bi')}
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
                onChange={props.typeChangeYpr}
              />
              Ale
            </S.Label>
            <S.Label>
              <Radio
                values={props.values}
                name="option"
                value="lager"
                onChange={props.typeChangeYpr}
              />
              Lager
            </S.Label>
          </S.CheckboxDivision>
          <S.Label>
            Wort Volume<b>(L)</b>
          </S.Label>
          <S.Input
            value={props.values.num1}
            type="number"
            name="num1"
            onChange={props.handleChange}
          ></S.Input>
          <S.Label>Wort Gravity</S.Label>
          <S.Input
            value={props.values.num2}
            type="number"
            step="any"
            name="num2"
            onChange={props.handleChange}
          ></S.Input>
          {!!props.values.num1 && !!props.values.num2 && props.values.option ? (
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
                onChange={props.typeChangeYpr}
              />
              Dry
            </S.Label>
            <S.Label>
              <Radio
                values={props.values}
                name="option2"
                value="liquid"
                onChange={props.typeChangeYpr}
              />
              Liquid
            </S.Label>
          </S.CheckboxDivision>
          <S.Label>Cells Number</S.Label>
          <S.Input
            value={props.values.num3}
            type="number"
            name="num3"
            onChange={props.handleChange}
          ></S.Input>
          <S.Label>
            Efficiency<b>(%)</b>
          </S.Label>
          <S.Input
            value={props.values.num4}
            type="number"
            step="any"
            name="num4"
            onChange={props.handleChange}
          ></S.Input>
          {!!props.values.num3 && !!props.values.num4 && props.values.option2 ? (
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
