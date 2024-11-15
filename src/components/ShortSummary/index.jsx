import { Link } from 'react-router-dom';
import styles from './ShortSummary.module.css'

const ShortSummary = ({product, toggleFullSummary}) => {

    const stringifyCategory = product.category.toString()

    return(
        <div className={styles.shortSummary}>
            <img src={product.image} alt={`Image of ${product.name}`} className={styles.smallImage}/>
            <div className={styles.infoBox}>
                <h3>{product.name}</h3>
                <p className={styles.shortDescription}>{product.shortDescription}</p>
                <p>Origin: {product.origin}</p>
                <p>{product.price} kr</p>
                <Link to={product.category} className={styles.category} onClick={() => handleCategoryChange({stringifyCategory})}>Find more {product.category}</Link>
                <p onClick={toggleFullSummary} className={styles.readMore}>Read more</p>
            </div>
        </div> 
    )
}

export default ShortSummary;