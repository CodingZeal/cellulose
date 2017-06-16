import { Cellulose } from "cellulose";
import React from "react";

import styles from "./styles.scss";

const breakPoints = {
  566: styles.fullHeader
};

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <Cellulose breakPoints={breakPoints}>
        <h1>Cellulose</h1>
        <h2>A Contextually Aware Grid For React</h2>
      </Cellulose>
    </section>
  );
}
