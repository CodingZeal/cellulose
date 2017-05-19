import React from 'react'
import { Cell, Cellulose } from 'cellulose'

export default function Header(props) {
  const breakPoints = {
    0: 'greater-than-0',
    480: 'greater-than-480'
  }

  return (
    <section>
      <Cellulose columns={3} breakPoints={breakPoints}>
        <Cell spanOptions={{ 0: 3, 480: 1 }}>
          <div>MQ Icon</div>
          <h3>Better Than Media Queries</h3>
          <p>Components are responsive to their own size, rather than window size</p>
        </Cell>

        <Cell spanOptions={{ 0: 3, 480: 1 }}>
          <div>Granular Icon</div>
          <h3>Granular</h3>
          <p>Your custom components can each manage their own grid</p>
        </Cell>

        <Cell spanOptions={{ 0: 3, 480: 1 }}>
          <div>BP Icon</div>
          <h3>Easy Breakpoints</h3>
          <p>Define breakpoints with a simple Javascript object, give each UI component its own custom grid</p>
        </Cell>
      </Cellulose>
    </section>
  )
}
