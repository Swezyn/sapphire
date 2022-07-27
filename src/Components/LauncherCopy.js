import React from 'react'
import styles from '../Styles/Launcher.module.css'
import launcher from '../Images/whiteoutbanner.png'

function LauncherCopy() {
  return (
    <div className={styles.container}>
        <div className={styles.bar}>
            <h1>Whiteout</h1>
            <h2>Battle Royale</h2>
            <div className={styles.banner}> 
                <img src={launcher} />
            </div>
        </div>
        <div className={styles.desc}>
            <p>The ultimate game launcher featuring the hottest games of 2022.</p>
            <button className="playbutton"><p>PLAY NOW</p></button>
        </div>
    </div>
  )
}

export default LauncherCopy