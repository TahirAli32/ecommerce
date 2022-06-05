import React, { useState } from 'react'
// import { MenuIcon, ShoppingCartIcon, PersonIcon, SearchIcon} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {

    const [sidebar, showSideBar] = useState(false)

  return (
    <div className={styles.nav}>            
        <div className={styles.hamburger}><MenuIcon /></div>
        <div className={styles.logo}>LOGO HERE</div>
        <ul className={styles.right}>
            <li className={styles.rigthIcons}><PersonIcon /></li>
            <li className={styles.rigthIcons}><ShoppingCartIcon /></li>
            <li className={styles.rigthIcons}><SearchIcon /></li>
        </ul>
    </div>
  )
}
export default Navbar