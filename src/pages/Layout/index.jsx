import { NavLink, Outlet } from "react-router-dom"
import { Menu } from 'lucide-react'
import { useCallback, useState } from "react"
import Sidebar from "../../components/Sidebar"
import ShortSummary from "../../components/ShortSummary"
import styles from './Layout.module.css'

const Layout = ({selectedProduct, setSelectedProduct}) => {

    const [category, setCategory] = useState('home');

    const handleCategoryChange = useCallback((newCategory) => {
        setCategory(newCategory);
        console.log(newCategory)
    }, []);

    console.log(selectedProduct)

    return(
        <>
            <Menu className={styles.menuIcon}/>
                <nav className={styles.navbar}>
                    <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='/' onClick={() => handleCategoryChange('home')} >Home</NavLink>
                    <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='crystals' onClick={() => handleCategoryChange('crystal')} >Crystals</NavLink>
                    <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='essentialoils' onClick={() => handleCategoryChange('essential oil')} >Essential Oils</NavLink>
                    <NavLink className={({ isActive}) => isActive ? styles.active : ''} to='incenses' onClick={() => handleCategoryChange('incense')}>Incenses</NavLink>
                </nav>
            <div className={styles.mainContent}>
                <Sidebar category={category} handleCategoryChange={handleCategoryChange} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>
                {selectedProduct && <ShortSummary product={selectedProduct}/> }
            </div>
            <Outlet/>
        </>
    )
}

export default Layout;