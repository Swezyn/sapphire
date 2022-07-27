import React from 'react'
import styles from '../Styles/Launcher.module.css'
import launcher from '../Images/launcher.png'

function Launcher() {
  return (
    <div className={styles.container}>
        <div className={styles.bar}>
            <h1><span>Sapphire</span> Connect</h1>
            <h3>Install, Update & Play</h3>
            <div className={styles.banner}> 
                <img src={launcher} />
            </div>
        </div>
        <div className={styles.desc}>
            <p>The ultimate game launcher featuring the hottest games of 2022.</p>
            <button className="playbutton"><p>DOWNLOAD NOW</p></button>
        </div>
    </div>
  )
}

export default Launcher