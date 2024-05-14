import styles from './DetailedPage.module.css'

const DetailedPage = ({product}) => {
    return(
        <div className={styles.detailedContainer}>
            <p>Detailed page</p>
            {/* <img src={product.image} alt={`Image of ${product.name}`}/>
            <div>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <p>{product.price}</p>
                <p>{product.origin}</p>
                <p>{product.category}</p>
            </div> */}
        </div> 
    )
}

export default DetailedPage;