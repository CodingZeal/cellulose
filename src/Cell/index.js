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

const StyledCell = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
`
export default class Cell extends PureComponent {
  flexProperties = [
    'alignSelf',
    'flexBasis',
    'flexGrow',
    'flexShrink',
    'flex',
    'order'
  ]

  render() {
    const { breakPoint, children, columns } = this.props
    const spanOptions = over(
      lensProp('0'),
      defaultTo(columns),
      this.props.spanOptions
    )
    const span = prop(breakPoint, spanOptions)
    const cols = when(is(Object), prop('cols'))(span)
    const className = ifElse(is(Object), prop('className'), F)(span)
    const flexStyles = pick(this.flexProperties)(this.props)
    const width = `${cols / columns * 100}%`

    const cellClassName = classnames(
      { [className]: className }
    )

    return (
      <StyledCell style={{ ...flexStyles, width }} className={cellClassName}>
        {children}
      </StyledCell>
    )
  }
}
