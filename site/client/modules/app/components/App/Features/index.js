import React from "react";
import { Cell, Cellulose } from "cellulose";

import styles from "./styles.scss";
import breakpointsIcon from "./feature-icon-breakpoints.png";
import granularIcon from "./feature-icon-granular.png";
import mqIcon from "./feature-icon-mq.png";

export default function Header() {
  const breakPoints = {
    0: "greater-than-0",
    480: "greater-than-480"
  };

  return (
    <section className={styles.featuresContainer}>
      <div className={styles.features}>
        <Cellulose columns={3} breakPoints={breakPoints}>
          <Cell spanOptions={{ 0: 3, 480: 1 }}>
            <div className={styles.featureImage}>
              <img src={mqIcon} alt="media queries" />
            </div>
            <h3>Better Than Media Queries</h3>
            <p>
              Components are responsive to their own size, rather than window
              size
            </p>
          </Cell>

          <Cell spanOptions={{ 0: 3, 480: 1 }}>
            <div className={styles.featureImage}>
              <img src={granularIcon} alt="granular" />
            </div>
            <h3>Granular</h3>
            <p>Your custom components can each manage their own grid</p>
          </Cell>

          <Cell spanOptions={{ 0: 3, 480: 1 }}>
            <div className={styles.featureImage}>
              <img src={breakpointsIcon} alt="breakpoints" />
            </div>
            <h3>Easy Breakpoints</h3>
            <p>
              Define breakpoints with a simple Javascript object, give each UI
              component its own custom grid
            </p>
          </Cell>
        </Cellulose>
      </div>
    </section>
  );
}
