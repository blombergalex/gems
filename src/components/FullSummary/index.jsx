import styles from './FullSummary.module.css'

const FullSummary = ({product}) => {
    console.log(`showing full summary of ${product.name}`)
    return(
        <div className={styles.fullSummary}>
            <h3>{product.name}</h3>
        </div>
    )
}

export default FullSummary