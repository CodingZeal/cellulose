import React, { PureComponent } from 'react'
import {
  defaultTo,
  F,
  ifElse,
  is,
  lensProp,
  over,
  pick,
  prop,
  when
} from 'ramda'
import classnames from 'classnames'
import styled from 'styled-components'

const CellWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
`
const flexProperties = [
  'alignSelf',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'flex',
  'order'
]

export default function Cell(props) {
  const { breakPoint, children, columns, ...rest} = props
  const spanOptions = over(
    lensProp('0'),
    defaultTo(columns),
    props.spanOptions
  )
  const span = prop(breakPoint, spanOptions)
  const cols = when(is(Object), prop('cols'))(span)
  const className = ifElse(is(Object), prop('className'), F)(span)
  const flexStyles = pick(flexProperties)(rest)
  const width = `${cols / columns * 100}%`

  const cellClassName = classnames(
    { [className]: className }
  )

  return (
    <CellWrapper style={{ ...flexStyles, width }} className={cellClassName}>
      {children}
    </CellWrapper>
  )
}
