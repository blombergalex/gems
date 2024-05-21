import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import styles from './MobileNavigation.module.css'

const MobileNavigation = ({handleCategoryChange}) => {

    const [showNavItems, setShowNavItems] = useState(false);
    const navItemsContainer = useRef(null);
    
    const handleMenuClick = () => {
        setShowNavItems(!showNavItems)
    }

    const closeMenu = () => {
        setShowNavItems(false)
    }

    document.addEventListener('click', (event) => {
        if (showNavItems && !navItemsContainer?.current?.contains(event.target)) {
            closeMenu();
        }
    });

    return(
        <>
        <nav className={styles.navbar}>
            {showNavItems &&
            <div className={styles.navItemsContainer}>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/' onClick={() => handleCategoryChange('home')} >Home</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals' onClick={() => handleCategoryChange('crystals')} >Crystals</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils' onClick={() => handleCategoryChange('essentialoils')} >Essential Oils</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses' onClick={() => handleCategoryChange('incenses')}>Incenses</NavLink>
                <X className={styles.closeMenuIcon}/>
            </div>
            }
            <Menu onClick={handleMenuClick} ref={navItemsContainer} className={styles.menuIcon}/>
        </nav>
        </>
    )
}

export default MobileNavigation