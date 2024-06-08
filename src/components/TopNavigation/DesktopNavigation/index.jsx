import { NavLink } from 'react-router-dom'
import styles from './DesktopNavigation.module.css'

const DesktopNavigation = () => {
    return(
            <div className={styles.navItemsContainer}>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/'>Home</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals'>Crystals</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils'>Essential Oils</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses'>Incenses</NavLink>
            </div>
    )
}

export default DesktopNavigation