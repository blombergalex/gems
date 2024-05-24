import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import styles from './MobileNavigation.module.css'

const MobileNavigation = ({handleCategoryChange}) => {
    const [showNavItems, setShowNavItems] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navItemsContainer = useRef(null);
    
    const handleMenuClick = () => {
        setShowNavItems(true)     
        console.log('menu icon clicked')
    }

    const closeMenu = () => {
        setIsClosing(true);

        setTimeout(() => {
            setShowNavItems(false)
            setIsClosing(false);
        }, 2000);
    };

    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={'/images/lotus.png'} className={styles.logo}/>
                <p>Zen Gem Haven</p>
            </div>
            {showNavItems &&
            <div className={`${styles.navItemsContainer} ${isClosing ? styles.fadeOut : ''}`}>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/' onClick={() => {handleCategoryChange('home'); closeMenu()}} >Home</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals' onClick={() => {handleCategoryChange('crystals'); closeMenu()}}>Crystals</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils' onClick={() => {handleCategoryChange('essentialoils'), closeMenu()}}>Essential Oils</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses' onClick={() => {handleCategoryChange('incenses'), closeMenu()}}>Incenses</NavLink>
                <X onClick={closeMenu} className={styles.closeMenuIcon}/>
            </div>
            }
            <Menu onClick={handleMenuClick} ref={navItemsContainer} className={styles.menuIcon}/>
        </nav>
    )
}

export default MobileNavigation