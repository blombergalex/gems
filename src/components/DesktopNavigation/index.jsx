import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import styles from './DesktopNavigation.module.css'

const DesktopNavigation = ({handleCategoryChange}) => {
    return(
        <>
        <nav className={styles.navbar}>
            <div className={styles.navItemsContainer}>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/' onClick={() => handleCategoryChange('home')} >Home</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals' onClick={() => handleCategoryChange('crystals')} >Crystals</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils' onClick={() => handleCategoryChange('essentialoils')} >Essential Oils</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses' onClick={() => handleCategoryChange('incenses')}>Incenses</NavLink>
            </div>
        </nav>
        </>
    )
}

export default DesktopNavigation