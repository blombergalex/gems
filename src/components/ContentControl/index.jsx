import Sidebar from "../Sidebar";
import styles from './ContentControl.module.css'

const ContentControl = () => {

    // const [productCategory, setProductCategory] = useState('home');

    return(
        <div className={styles}>
            {/* <Sidebar /> */}
        </div>
    )
}

export default ContentControl

// <div className={styles.mainContent}>
//     <Sidebar category={category} handleCategoryChange={handleCategoryChange} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} backToShortSummary={backToShortSummary}/>
//     {selectedProduct && !showFullSummary ? (
//         <ShortSummary product={selectedProduct} toggleFullSummary={toggleFullSummary} /> 
//         ) : null}
//     {showFullSummary && selectedProduct ? (
//     <FullSummary product={selectedProduct} backToShortSummary={backToShortSummary}/>
//     ): null}
//     {!selectedProduct && !showFullSummary ? (
//         <WelcomeMessage category={category}/>
//     ): null}
// </div>