import React from "react";
import { Cell, Cellulose } from "cellulose";

import styles from "./styles.scss";

const breakPoints = {
  0: "greater-than-0",
  480: "greater-than-480"
};

export default function GettingStarted() {
  return (
    <section className={styles.gettingStartedContainer}>
      <div className={styles.gettingStarted}>
        <Cellulose columns={2} breakPoints={breakPoints}>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <h3>Getting Started</h3>
            <p>
              <span className={styles.tag}>
                &lt;
              </span>
              <strong>Cellulose</strong>
              <span className={styles.rightPaddedTag}>
                &gt;
              </span>
              will render into the DOM as a
              <span className={styles.leftPaddedTag}>
                &lt;
              </span>
              <strong>div</strong>
              <span className={styles.rightPaddedTag}>
                &gt;
              </span>
              whose class is defined by the breakPoints object and the
              width the component exceeds.
            </p>
          </Cell>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <pre className="prettyprint">
              {`import { Cellulose } from 'cellulose'
import React from 'react'
export function MyComponent() {
  const breakPoints = {
    768:  'greater-than-768',
    1024: 'greater-than-1024'
  }
  return (
    <Cellulose breakPoints={breakPoints}>
      <div>Content</div>
    </Cellulose>
  )
}`}
            </pre>
          </Cell>
        </Cellulose>
      </div>
    </section>
  );
}
