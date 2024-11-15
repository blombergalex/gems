import { Link } from 'react-router-dom';
import styles from './FullSummary.module.css'

const FullSummary = ({product, backToShortSummary, category}) => {

    const stringifyCategory = product.category.toString()

    return(
        <div className={styles.fullSummary}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={`Image of ${product.name}`} className={styles.largeImage}/>
            <p>- {product.price} kr</p>
            <p>- Found in {product.origin}</p>
            <p className={styles.longDescription}>{product.longDescription}</p>
            <Link to={`/${stringifyCategory}`} className={styles.category} onClick={() => handleCategoryChange(stringifyCategory)}>Part of the {product.category} family</Link>
            {category !=="home" && (
                <p onClick={backToShortSummary} className={styles.goBack}>Go back</p>
            )}
        </div>
    )
}

export default FullSummary