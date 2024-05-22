import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import styles from './MobileNavigation.module.css'

const MobileNavigation = ({handleCategoryChange}) => {
    const [showNavItems, setShowNavItems] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navItemsContainer = useRef(null);
    
    const handleMenuClick = () => {
        setShowNavItems(!showNavItems)
    }

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowNavItems(false)
            setIsClosing(false);
        }, 2000);
    };

    document.addEventListener('click', (event) => {
        if (showNavItems && !navItemsContainer?.current?.contains(event.target)) {
            closeMenu();
        }
    });

    return(
        <nav className={styles.navbar}>
            {showNavItems &&
            <div className={`${styles.navItemsContainer} ${isClosing ? styles.fadeOut : ''}`}>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/' onClick={() => handleCategoryChange('home')} >Home</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals' onClick={() => handleCategoryChange('crystals')} >Crystals</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils' onClick={() => handleCategoryChange('essentialoils')} >Essential Oils</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses' onClick={() => handleCategoryChange('incenses')}>Incenses</NavLink>
                <X className={styles.closeMenuIcon}/>
            </div>
            }
            <Menu onClick={handleMenuClick} ref={navItemsContainer} className={styles.menuIcon}/>
        </nav>
    )
}

export default MobileNavigation