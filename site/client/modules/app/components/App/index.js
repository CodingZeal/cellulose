import React from "react";

import styles from "./styles.scss";

import Features from "./Features";
import GettingStarted from "./GettingStarted";
import Header from "./Header";
import Hero from "./Hero";
import Installation from "./Installation";
import SiteHeader from "./SiteHeader";
import Usage from "./Usage";

export default function App() {
  return (
    <div className={styles.root}>
      <SiteHeader />
      <Header />
      <Hero />
      <Features />
      <GettingStarted />
      <Installation />
      <Usage />
    </div>
  );
}
