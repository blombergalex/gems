import { Link } from 'react-router-dom'
import styles from './ShortSummary.module.css'

const ShortSummary = ({product, selectedProduct, setSelectedProduct, setShowDetailedPage}) => {
    console.log(`${product.name} is rendered`)

    const handleReadMoreClick = () => {
        setSelectedProduct(product);
        setShowDetailedPage(true);
    }

    return(
        <div className={styles.shortSummary}>
            <img src={product.image} alt={`Image of ${product.name}`} className={styles.smallImage}/>
            <div className={styles.infoBox}>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <p>{product.price}</p>
                <p>{product.origin}</p>
                <p>{product.category}</p>
                <p onClick={handleReadMoreClick}>Read more</p>
            </div>
        </div> 
    )
}

export default ShortSummary;