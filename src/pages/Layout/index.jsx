import { useCallback, useState } from "react"
import TopNavigation from "../../components/TopNavigation"
import Sidebar from "../../components/Sidebar"
import ShortSummary from "../../components/ShortSummary"
import FullSummary from "../../components/FullSummary"
import WelcomeMessage from "../../components/WelcomeMessage"
import scrollToTop from "../../assets/functions"
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
        scrollToTop();
    };

    const backToShortSummary = () => {
        setShowFullSummary(false);
        scrollToTop();
    };

    return(
        <>
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
        </>
    )
}

export default Layout;