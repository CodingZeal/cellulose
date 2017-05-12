import React from 'react'

export default function Header(props) {
  return (
    <section>
      <div>
        <div>
          <div>MQ Icon</div>
          <h3>Better Than Media Queries</h3>
          <p>Components are responsive to their own size, rather than window size</p>
        </div>

        <div>
          <div>Granular Icon</div>
          <h3>Granular</h3>
          <p>Your custom components can each manage their own grid</p>
        </div>

        <div>
          <div>BP Icon</div>
          <h3>Easy Breakpoints</h3>
          <p>Define breakpoints with a simple Javascript object, give each UI component its own custom grid</p>
        </div>
      </div>
    </section>
  )
}
