/* eslint-disable max-nested-callbacks */
import React from 'react'
import { mount } from 'enzyme'
import { has } from 'ramda'

import Cellulose from '../'
import Cell from '../../Cell'

describe('Cellulose', () => {
  const breakPoints = {
    768: 'point768',
    1024: { className: 'point1024' }
  }

  const wrapper = mount(
    <Cellulose columns={12} breakPoints={breakPoints}>
      <Cell spanOptions={{ 768: { cols: 6, className: 'col4' }, 1024: 8 }}>
        <div>One</div>
      </Cell>
      <Cell spanOptions={{ 768: 6, 1024: 4 }}>
        <div>Two</div>
      </Cell>
    </Cellulose>
  )
  const instance = wrapper.instance()

  test('it passes breakPoint and columns to Cell', () => {
    const gridItems = wrapper.find(Cell)

    expect(has('breakPoint')(gridItems.first().props())).toBe(true)
    expect(has('columns')(gridItems.first().props())).toBe(true)
  })

  describe('breakPoint', () => {
    test('it returns a breakPoint of 0', () => {
      expect(instance.breakPoint(350, { 0: null, ...breakPoints })).toBe('0')
    })
  })

  describe('breakPointClass', () => {
    test('it returns className value', () => {
      expect(instance.breakPointClass(768, { 0: null, ...breakPoints }))
        .toBe('point768')
      expect(instance.breakPointClass(
        0, { 0: { className: 'point0' }, ...breakPoints }
      )).toBe('point0')
    })
  })
})
