import { NavLink, Outlet } from "react-router-dom"
import { Menu } from 'lucide-react'
import { useCallback, useState } from "react"
import Sidebar from "../../components/Sidebar"
import ShortSummary from "../../components/ShortSummary"
import FullSummary from "../../components/FullSummary"
import WelcomeMessage from "../../components/WelcomeMessage"
import styles from './Layout.module.css'

const Layout = ({selectedProduct, setSelectedProduct}) => {

    const [category, setCategory] = useState('home');
    const [showFullSummary, setShowFullSummary] = useState(false);

    const handleCategoryChange = useCallback((newCategory) => {
        setCategory(newCategory);
        setSelectedProduct(null);
        setShowFullSummary(false);
    }, []);

    const toggleFullSummary = () => {
        setShowFullSummary(!showFullSummary);
    };

    const backToShortSummary = () => {
        setShowFullSummary(false);
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
            <div className={styles.mainContent}>
                <Sidebar category={category} handleCategoryChange={handleCategoryChange} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} backToShortSummary={backToShortSummary}/>
                {selectedProduct && !showFullSummary ? (
                    <ShortSummary product={selectedProduct} toggleFullSummary={toggleFullSummary} /> 
                    ) : null}
                {showFullSummary && selectedProduct ? (
                <FullSummary product={selectedProduct} backToShortSummary={backToShortSummary}/>
                ): null}
                {!selectedProduct && !showFullSummary ? (
                    <WelcomeMessage category={category}/>
                ): null}
            </div>
            <Outlet/>
        </>
    )
}

export default Layout;