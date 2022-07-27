import React from 'react'
import styles from '../Styles/Pages.module.css'
import { Box } from '@mui/material'

import Hero from '../Components/Hero'
import Games from '../Components/Games'
import Launcher from '../Components/Launcher'
import LauncherCopy from '../Components/LauncherCopy'

function Home() {

  return (
    <div className={styles.columncontainer}>
      <LauncherCopy />
      {/*
      <Hero />
      <Box height="10vh" />
       */}
      <h1 className={styles.header}>OUR GAMES</h1>
      <Games />
      <Hero />
    </div>
  )
}

export default Home