import styles from './FullSummary.module.css'

const FullSummary = ({product, backToShortSummary}) => {
    return(
        <div className={styles.fullSummary}>
            <h3>{product.name}</h3>
            <p>{product.longDescription}</p>
            <p>{product.price} kr</p>
            <p>Found in {product.origin}</p>
            <p>Part of the {product.category} family</p>
            <p onClick={backToShortSummary}>Go back</p>
        </div>
    )
}

export default FullSummary