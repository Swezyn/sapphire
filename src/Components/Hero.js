import React from 'react'
import styles from '../Styles/Hero.module.css'
import whiteoutlogo from '../Images/whiteoutlogo.png'
import banner from '../Images/whiteoutbanner.png'
import glitch from '../Images/glitch.png'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.backgroundimage}>
          <img src={glitch} />
        </div>
        <div className={styles.banner}>
          <img src={banner} />
        </div>
        <div className={styles.block}>
            <img src={whiteoutlogo}/>
          <h1>Prepare to be the last one standing</h1>
          <Box height="1rem" />
          <p>Start your journey of epic battles and climb to the top</p>
          <Box height="2rem" />
          <Link to="/whiteout"><button className="playbutton"><p>PLAY NOW</p></button></Link>
        </div>
      </div>
  )
}

export default Hero