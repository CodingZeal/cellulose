import React from "react";
import { Cell, Cellulose } from "cellulose";
import classnames from "classnames";

import styles from "./styles.scss";

const breakPoints = {
  0: "greater-than-0",
  480: "greater-than-480"
};
const snippetClass = classnames("prettyprint", "lang-bsh", styles.snippet);

export default function Installation() {
  return (
    <section className={styles.installationContainer}>
      <div className={styles.installation}>
        <h3>Installation</h3>
        <Cellulose columns={2} breakPoints={breakPoints}>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <h4>Npm</h4>
            <pre className={snippetClass}>
              npm i -S cellulose
            </pre>
          </Cell>
          <Cell spanOptions={{ 0: 2, 480: 1 }}>
            <h4>Yarn</h4>
            <pre className={snippetClass}>
              yarn add cellulose
            </pre>
          </Cell>
        </Cellulose>
      </div>
    </section>
  );
}
