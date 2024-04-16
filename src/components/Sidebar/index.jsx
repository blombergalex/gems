import { Link } from "react-router-dom";
import { allProducts } from "../../data/data";
import styles from './Sidebar.module.css'

const Sidebar = ({category}) => {

    const crystalList = () => {
        return allProducts.filter(product => product.category === 'crystal').map(product => (
            <p key={product.name}>
            <p to={`/product/${product.name}`}>{product.name}</p>
            </p>
        ))
    }

    const incenseList = () => {
        return allProducts.filter(product => product.category === 'essential oil').map(product => (
            <p key={product.name}>
            <p to={`/product/${product.name}`}>{product.name}</p>
            </p>
        ))
    }

    const essentialoilsList = () => {
        return allProducts.filter(product => product.category === 'incense').map(product => (
            <div key={product.name}>
                <p to={`/product/${product.name}`}>{product.name}</p>
            </div>
        ))
    }

    return(
        <div className={styles.sidebar}>
            <div>
            {category === 'home' ? (
                <>
                <p>
                    <Link to='crystals' className={styles.category}>Crystals</Link>
                    <p>
                    {crystalList()}
                    </p>
                </p>
                <p>
                    <Link to='essentialoils' className={styles.category}>Essential Oils</Link>
                    <p>
                    {essentialoilsList()}
                    </p>
                </p>
                <p>
                    <Link to='incenses' className={styles.category}>Incenses</Link>
                    <p>
                    {incenseList()}
                    </p>
                </p>
                </>
            ) 
            
            : category === 'crystals' ? (
                <div>
                    <Link to='crystals' className={styles.category}>Crystals</Link>
                    <p>{crystalList()}</p>
                </div>
            ) 
            : category === 'essentialoils' ? (
                <p>
                    <Link to='essentialoils' className={styles.category}>Essential Oils</Link>
                    <p>{incenseList()}</p>
                </p>
            ) 
            : category === 'incenses' ? (
                <p>
                    <Link to='incenses' className={styles.category}>Incenses</Link>
                    <p>{essentialoilsList()}</p>
                </p>
            ) 
            : null }
            </div>
        </div>
    );
  };

export default Sidebar;