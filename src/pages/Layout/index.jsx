import { NavLink, Outlet } from "react-router-dom"
import { Menu } from 'lucide-react'
import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import styles from './Layout.module.css'

const Layout = () => {

    const [category, setCategory] = useState('home');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return(
        <>
        <Menu className={styles.menuIcon}/>
            <nav className={styles.navbar}>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/' onClick={() => handleCategoryChange('home')} >Home</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals' onClick={() => handleCategoryChange('crystals')} >Crystals</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils' onClick={() => handleCategoryChange('essentialoils')} >Essential Oils</NavLink>
                <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses' onClick={() => handleCategoryChange('incenses')}>Incenses</NavLink>
            </nav>
        <Sidebar category={category}/> 
        <Outlet/>
        </>
    )
}

export default Layout;