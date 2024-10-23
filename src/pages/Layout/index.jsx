import { useCallback, useEffect, useState } from "react"
import Intro from '../../components/Intro';
import TopNavigation from "../../components/TopNavigation"
import Sidebar from "../../components/Sidebar"
import ShortSummary from "../../components/ShortSummary"
import FullSummary from "../../components/FullSummary"
import WelcomeMessage from "../../components/WelcomeMessage"
import scrollToTop from "../../assets/functions"
import styles from './Layout.module.css'
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Layout = ({selectedProduct, setSelectedProduct}) => {

    const [category, setCategory] = useState('home');
    const [showFullSummary, setShowFullSummary] = useState(false);
    const [isHome, setIsHome] = useState(true);

    const handleCategoryChange = useCallback((newCategory) => {
        setCategory(newCategory);
        setSelectedProduct(null);
        setShowFullSummary(false);
    }, []);

    const handlePathChange = () => {
        if (location.pathname.includes('crystals')) {
            setCategory('crystals')
        } else if (
            location.pathname.includes('incenses')) {
                setCategory('incenses')
        } else if (
            location.pathname.includes('essentialoils')) {
                setCategory('essentialoils')
        }
    }

    const toggleFullSummary = () => {
        setShowFullSummary(!showFullSummary);
        scrollToTop();
    };

    const backToShortSummary = () => {
        setShowFullSummary(false);
        scrollToTop();
    };

    const ifHome = () => {
    if (location.pathname.includes('crystals') ||
        location.pathname.includes('incenses') ||
        location.pathname.includes('essentialoils')
    ) {
        setIsHome(false);
    } else {
        setIsHome(true);
    }
    }

    useEffect(() => {
        ifHome();
        handlePathChange();
    }, [location.pathname])

    return(
        <>
            <Intro />
            <TopNavigation handleCategoryChange={handleCategoryChange}/>
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
            <Outlet />
            {isHome && (
                <Footer category='' />
            )}
        </>
    )
}

export default Layout;