import { Cellulose, Cell } from 'cellulose'
import React from 'react'

import celluloseLogo from '../Header/cellulose-logo.png'
import reactgenLogo from './react-gen-logo.png'
import styles from './styles.scss'

const breakPoints = {
  480: `${styles.containerShown}`
}

export default function SiteHeader(props) {
  return (
    <Cellulose breakPoints={breakPoints}>
      <div className={styles.container}>
        <div>
          <ul className={styles.linkList}>
            <li>
              <a href="http://open.codingzeal.com/generator-react-zeal/">
                <img src={reactgenLogo} />
                ReactGen
              </a>
            </li>
            <li className={styles.active}>
              <a href="http://getcellulose.com/">
                <img src={celluloseLogo} />
                Cellulose
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.sideCredit}>
          Maintained by the development team at
          {' '}
          <a href="https://codingzeal.com">Zeal</a>
        </div>
      </div>
    </Cellulose>
  )
}
