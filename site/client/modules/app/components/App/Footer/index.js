import React from "react";

import styles from "./styles.scss";

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footer}>
        Full documentation available at:
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/CodingZeal/cellulose"
          className={styles.link}
        >
          https://github.com/CodingZeal/cellulose/
        </a>
      </div>
    </section>
  );
}
