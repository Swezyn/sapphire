import styles from '../Styles/Navbar.module.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png';
import logotext from '../Images/logotext.png';
import { FaAngleDown } from 'react-icons/fa';
import { Switch } from '@mui/material'

export default function Navbar() {

  const [activeMenu, setActiveMenu] = useState(false);

  function ToggleMode(){
    if (document.documentElement.classList.contains('dark-mode')) {
      document.documentElement.classList.remove('dark-mode')
    } else {
      document.documentElement.classList.add('dark-mode')
    }
  }

  return (
      <nav className={styles.navbar}>

        {/* Logo */}
        <Link className={styles.home} to="/">
          <div className={styles.logo}>
            <img src={logo} />
            <span className={styles.logo}><img src={logotext} /></span>
          </div>
        </Link>

        {/* Menu */}
        <div className={styles.right}>
          <ul className={styles.nav}>
            
            {/* Nav Item*/}
            <li onPointerEnter={() => setActiveMenu('games')} onPointerLeave={() => setActiveMenu('')} className={styles.navitem}><p>Games</p><FaAngleDown className={styles.icon} />
            <ul className={`${styles.dropdown} ${activeMenu !== 'games' && styles.hidden}`}>
              <li className={styles.dropdownheader}>OUR GAMES</li>
              <Link to="/whiteout"><li className={styles.dropdownitem}>Whiteout</li></Link>
              <Link to="/drift"><li className={styles.dropdownitem}>Drift</li></Link>
            </ul></li>

            {/* Nav Item*/}
            <li onPointerEnter={() => setActiveMenu('about')} onPointerLeave={() => setActiveMenu('')} className={styles.navitem}><p>About</p><FaAngleDown className={styles.icon} />
            <ul className={`${styles.dropdown} ${activeMenu !== 'about' && styles.hidden}`}>
              <li className={styles.dropdownheader}>ABOUT US</li>
              <Link to="/about"><li className={styles.dropdownitem}>About Us</li></Link>
              <Link to="/contact"><li className={styles.dropdownitem}>Contact</li></Link>
            </ul></li>
          </ul>

          {/* Dark Mode */}
          <Switch size='large' color='default' onChange={() => ToggleMode()}/>
        </div>
      </nav>
  );
}