import styles from './ShortSummary.module.css'

const ShortSummary = ({product}) => {
    return(
        <div className={styles.shortSummary}>
            <img src={product.image} alt={`Image of ${product.name}`} className={styles.smallImage}/>
            <div className={styles.infoBox}>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <p>{product.price}</p>
                <p>{product.origin}</p>
                <p>{product.category}</p>
            </div>
        </div>
    )
}

export default ShortSummary;