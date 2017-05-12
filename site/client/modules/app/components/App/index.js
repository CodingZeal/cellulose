import React from 'react'

import styles from './styles.scss'
import Features from './Features'
import Header from './Header'
import Hero from './Hero'

export default function App({ store }) {
  return (
    <div className={styles.root}>
      <Header />
      <Hero />
      <Features />
    </div>
  )
}
