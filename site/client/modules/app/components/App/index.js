import React from 'react'
import { Route, Switch } from 'react-router-dom'

import styles from './styles.scss'
import logo from './logo.png'

export default function App({ store }) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt='logo' />
        <h2>Welcome!</h2>
      </div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

function Home() {
  return (
    <h3>Home</h3>
  )
}

function NotFound() {
  return (
    <h3>Route not found</h3>
  )
}
