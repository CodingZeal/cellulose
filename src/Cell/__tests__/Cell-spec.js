import React from 'react'
import { shallow } from 'enzyme'
import { has } from 'ramda'
import renderer from 'react-test-renderer'

import Cell from '../'

describe('Cell', () => {
  const wrapper = shallow(
    <Cell
        textAlign='center'
        alignSelf='center'
        spanOptions={{ 0: 12, 768: { cols: 6, className: 'col6' } }}
        columns={12}
        breakPoint={768}>
      <div>One</div>
    </Cell>
  )
  const style = wrapper.prop('style')

  test('it passes white listed flex props to style', () => {
    expect(has('alignSelf')(style)).toBe(true)
    expect(has('textAlign')(style)).toBe(false)
  })

  test('it computes the width based on colums and span', () => {
    expect(style.width).toBe('50%')
  })

  test('it adds col6 className', () => {
    expect(wrapper.hasClass('col6')).toBe(true)
  })

  test('cell renders correctly', () => {
    const tree = renderer.create(
      <Cell
          textAlign='center'
          alignSelf='center'
          spanOptions={{ 0: 12, 768: { cols: 6, className: 'col6' } }}
          columns={12}
          breakPoint={768}>
        <div>One</div>
      </Cell>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
