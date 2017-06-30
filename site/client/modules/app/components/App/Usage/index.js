import React from "react";
import { Cell, Cellulose } from "cellulose";

import styles from "./styles.scss";

const breakPoints = {
  0: "greater-than-0",
  480: "greater-than-480"
};

export default function Usage() {
  return (
    <section className={styles.usageContainer}>
      <div className={styles.usage}>
        <Cellulose columns={2} breakPoints={breakPoints}>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <h3>Usage</h3>
            <p>
              Cellulose can also be used to create a responsive grid. Use the
              columns property of
              <span className={styles.leftPaddedTag}>
                &lt;
              </span>
              <strong>Cellulose</strong>
              <span className={styles.rightPaddedTag}>
                &gt;
              </span>
              to define the number of columns to use, then add
              <span className={styles.leftPaddedTag}>
                &lt;
              </span>
              <strong>Cell</strong>
              <span className={styles.rightPaddedTag}>
                &gt;
              </span>
              components with spanOptions props that define responsive behavior
            </p>
          </Cell>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <pre className="prettyprint">
              {`import { Cellulose, Cell } from 'cellulose'
import React from 'react'
export function MyComponent() {
  const breakPoints = {
    768:  'greater-than-768',
    1024: 'greater-than-1024'
  }
  return (
    <Cellulose columns={12} breakPoints={breakPoints}>
      <Cell spanOptions={{ 768: 6, 1024: 8 }}>
        <div>One</div>
      </Cell>
      <Cell spanOptions={{ 768: 6, 1024: 4 }}>
        <div>Two</div>
      </Cell>
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
