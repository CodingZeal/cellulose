import React, { PureComponent } from 'react'
import Measure from 'react-measure'
import {
  compose,
  defaultTo,
  find,
  gt,
  is,
  keys,
  lensProp,
  over,
  pick,
  prop,
  sort,
  when
} from 'ramda'
import { themr } from 'react-css-themr'
import classnames from 'classnames'

import celluloseTheme from './theme.scss'

export class Cellulose extends PureComponent {
  flexProperties = [
    'alignContent',
    'alignItems',
    'flexDirection',
    'flexFlow',
    'flexWrap',
    'justifyContent'
  ]

  breakPoint = (width, breakPoints) => compose(
    find(gt(width)),
    sort((a, b) => b - a),
    keys
  )(breakPoints)

  breakPointClass = (key, breakPoints) => compose(
    when(is(Object), prop('className')),
    prop(key)
  )(breakPoints)

  render() {
    const { children, theme, columns } = this.props
    const flexStyles = pick(this.flexProperties)(this.props)
    const breakPoints = over(
      lensProp('0'),
      defaultTo(null),
      this.props.breakPoints
    )

    return (
      <Measure>
        {({ width }) => {
          const breakPoint = this.breakPoint(width, breakPoints)
          const breakPointClass = this.breakPointClass(breakPoint, breakPoints)

          const className = classnames(
            theme.cellulose,
            { [breakPointClass]: breakPointClass }
          )

          return (
            <div style={flexStyles} className={className}>
              {React.Children.map(
                children,
                child => React.cloneElement(
                  child, { ...child.props, breakPoint, columns }
                )
              )}
            </div>
          )
        }}
      </Measure>
    )
  }
}

export default themr('', celluloseTheme)(Cellulose)
