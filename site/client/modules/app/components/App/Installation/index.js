import React from "react";
import { Cell, Cellulose } from "cellulose";

import styles from "./styles.scss";

export default function Installation() {
  const breakPoints = {
    0: "greater-than-0",
    480: "greater-than-480"
  };

  return (
    <section className={styles.installationContainer}>
      <div className={styles.installation}>
        <h3>Installation</h3>
        <Cellulose columns={2} breakPoints={breakPoints}>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <h4>Npm</h4>
            <pre className="prettyprint lang-bsh">
              npm i -S cellulose
            </pre>
          </Cell>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <h4>Yarn</h4>
            <pre className="prettyprint lang-bsh">
              yarn add cellulose
            </pre>
          </Cell>
        </Cellulose>
      </div>
    </section>
  );
}
