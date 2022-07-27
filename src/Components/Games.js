import React from 'react'
import styles from '../Styles/Games.module.css'
import { Box } from '@mui/material'
import {Link} from 'react-router-dom'

import whiteoutbanner from '../Images/whiteoutbanner.png'
import whiteoutlogo from '../Images/whiteoutlogo.png'

function Games() {
  return (
    <div className={styles.gameholder}>
        <div className={styles.game}>
          <div className={styles.image}>
            <img className={styles.backgroundimage} src={whiteoutbanner} alt="" />
            <img className={styles.logo} src={whiteoutlogo} alt="" />
          </div>
          <div className={styles.text}>
            <h2>Whiteout</h2>
            <p>Whiteout is a fun Battle Royale game taking place on a new world everytime. It is also multiplayer, so that you can enjoy the game with your friends.</p>
            <Box height="2rem" />
            <Link to="/whiteout"><button className='playbutton'>PLAY NOW</button></Link>
          </div>
        </div>
        <div className={styles.game}></div>
        <div className={styles.game}></div>
        <div className={styles.game}></div>
      </div>
  )
}

export default Games