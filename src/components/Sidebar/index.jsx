import { Link, NavLink } from "react-router-dom";
import { allProducts } from "../../data/data";
import styles from './Sidebar.module.css'

const Sidebar = ({category, handleCategoryChange}) => {

    const crystalList = () => {
        return allProducts.filter(product => product.category === 'crystal').map(product => (
            <div key={product.name}>
            <p to={`/product/${product.name}`}>{product.name}</p>
            </div>
        ))
    }

    const incenseList = () => {
        return allProducts.filter(product => product.category === 'essential oil').map(product => (
            <div key={product.name}>
                <p to={`/product/${product.name}`}>{product.name}</p>
            </div>
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
                <div>
                    <Link to='crystals' className={styles.category} onClick={() => handleCategoryChange('crystals')}>Crystals</Link>
                    <p>{crystalList()}</p>
                </div>
                <div>
                    <Link to='essentialoils' className={styles.category}  onClick={() => handleCategoryChange('essentialoils')}>Essential Oils</Link>
                    <p>{essentialoilsList()}</p>
                </div>
                <div>
                    <Link to='incenses' className={styles.category} onClick={() => handleCategoryChange('incenses')}>Incenses</Link>
                    <p>{incenseList()}</p>
                </div>
                </>
            ) : category === 'crystals' ? (
                <div>
                    <Link to='crystals' className={styles.category}>Crystals</Link>
                    <p>{crystalList()}</p>
                    <NavLink to='/' className={styles.category} onClick={() => handleCategoryChange('home')}>&#8617;</NavLink>
                </div>
            ) : category === 'essentialoils' ? (
                <div>
                    <Link to='essentialoils' className={styles.category}>Essential Oils</Link>
                    <p>{incenseList()}</p>
                    <NavLink to='/' className={styles.category} onClick={() => handleCategoryChange('home')}>&#8617;</NavLink>
                </div>
            ) : category === 'incenses' ? (
                <div>
                    <Link to='incenses' className={styles.category}>Incenses</Link>
                    <p>{essentialoilsList()}</p>
                    <NavLink to='/' className={styles.category} onClick={() => handleCategoryChange('home')}>&#8617;</NavLink>
                </div>
            ) : null }
            </div>
        </div>
    );
  };

export default Sidebar;