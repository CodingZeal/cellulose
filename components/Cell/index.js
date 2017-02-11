import React, { PureComponent } from 'react'
import { themr } from 'react-css-themr'
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

import cellTheme from './theme.scss'

export class Cell extends PureComponent {
  flexProperties = [
    'alignSelf',
    'flexBasis',
    'flexGrow',
    'flexShrink',
    'flex',
    'order'
  ]

  render() {
    const { theme, breakPoint, children, columns } = this.props
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
      theme.cell,
      { [className]: className }
    )

    return (
      <div style={{ ...flexStyles, width }} className={cellClassName}>
        {children}
      </div>
    )
  }
}

export default themr('', cellTheme)(Cell)
