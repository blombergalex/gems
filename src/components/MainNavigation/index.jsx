import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './MainNavigation.module.css'

const MainNavigation = ({handleCategoryChange}) => {
    return(
        <>
        <nav className={styles.navbar}>
            <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/' onClick={() => handleCategoryChange('home')} >Home</NavLink>
            <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals' onClick={() => handleCategoryChange('crystals')} >Crystals</NavLink>
            <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils' onClick={() => handleCategoryChange('essentialoils')} >Essential Oils</NavLink>
            <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses' onClick={() => handleCategoryChange('incenses')}>Incenses</NavLink>
            <Menu className={styles.menuIcon}/>
        </nav>
        </>
    )
}

export default MainNavigation