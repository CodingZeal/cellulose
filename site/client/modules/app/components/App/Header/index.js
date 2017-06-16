import React from "react";

import styles from "./styles.scss";
import logo from "./cellulose-logo.png";

export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.header}>
        <div>
          <a href="#">
            <img src={logo} className={styles.logo} alt="cellulose logo" />
          </a>
        </div>

        <nav className={styles.navLinksFull}>
          <a href="#getting-started">Getting Started</a>
          <a href="#installation">Installation</a>
          <a href="#usage">Usage</a>
          <a href="https://github.com/CodingZeal/cellulose">Github</a>
        </nav>
      </div>
    </section>
  );
}
