import React from "react";
import { Cell, Cellulose } from "cellulose";

import styles from "./styles.scss";

import Features from "./Features";
import GettingStarted from "./GettingStarted";
import Header from "./Header";
import Hero from "./Hero";
import Installation from "./Installation";
import SiteHeader from "./SiteHeader";

export default function App() {
  const breakPoints = {
    0: "greater-than-0",
    480: "greater-than-480"
  };

  return (
    <div className={styles.root}>
      <SiteHeader />
      <Header />
      <Hero />
      <Features />
      <GettingStarted />
      <Installation />
      <Cellulose columns={2} breakPoints={breakPoints}>
        <Cell spanOptions={{ 0: 2, 480: 1 }}>
          <h3>Usage</h3>
          <p>
            Cellulose can also be used to create a responsive grid. Use the
            columns property of
            <span className={styles.tag}>
              &lt;
            </span>
            <strong>Cellulose</strong>
            <span className={styles.tag}>
              &gt;
            </span>
            to define the number of columns to use, then add
            <span className={styles.tag}>
              &lt;
            </span>
            <strong>Cell</strong>
            <span className={styles.tag}>
              &gt;
            </span>
            components with spanOptions props that define responsive behavior
          </p>
        </Cell>
        <Cell spanOptions={{ 0: 2, 480: 1 }}>
          <pre>CodeBlock</pre>
        </Cell>
      </Cellulose>
    </div>
  );
}
