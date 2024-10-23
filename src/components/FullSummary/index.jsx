import styles from './FullSummary.module.css'

const FullSummary = ({product, backToShortSummary}) => {
    return(
        <div className={styles.fullSummary}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={`Image of ${product.name}`} className={styles.largeImage}/>
            <p>- {product.price} kr</p>
            <p>- Found in {product.origin}</p>
            <p>- Part of the {product.category} family</p>
            <p className={styles.longDescription}>{product.longDescription}</p>
            <p onClick={backToShortSummary} className={styles.goBack}>Go back</p>
        </div>
    )
}

export default FullSummary