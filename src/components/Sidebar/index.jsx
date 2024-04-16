import { Link } from "react-router-dom";
import { allProducts } from "../../data/data";
import styles from './Sidebar.module.css'

const Sidebar = ({category}) => {


    return(
        <div className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Products</h3>
            <ul>
            {category === 'home' ? (
                <>
                <li>
                    <Link to='crystals' className={styles.category}>Crystals</Link>
                    <ul>
                    {allProducts.filter(product => product.category === 'crystal').map(product => (
                        <li key={product.name}>
                        <p>{product.name}</p>
                        </li>
                    ))}
                    </ul>
                </li>
                <li>
                    <Link to='essentialoils'>Essential Oils</Link>
                    <ul>
                    {allProducts.filter(product => product.category === 'essential oil').map(product => (
                        <li key={product.name}>
                        <p to={`/product/${product.name}`}>{product.name}</p>
                        </li>
                    ))}
                    </ul>
                </li>
                <li>
                    <Link to='incenses'>Incenses</Link>
                    <ul>
                    {allProducts.filter(product => product.category === 'incense').map(product => (
                        <li key={product.name}>
                        <p to={`/product/${product.name}`}>{product.name}</p>
                        </li>
                    ))}
                    </ul>
                </li>
                </>
            ) 
            
            : category === 'crystals' ? (
                <li>
                    <Link to='crystals'>Crystals</Link>
                    <ul>
                    {allProducts.filter(product => product.category === 'crystal').map(product => (
                        <li key={product.name}>
                        <p to={`/product/${product.name}`}>{product.name}</p>
                        </li>
                    ))}
                    </ul>
                </li>
            ) 
            : category === 'essentialoils' ? (
                <li>
                    <Link to='essentialoils'>Essential Oils</Link>
                    <ul>
                    {allProducts.filter(product => product.category === 'essential oil').map(product => (
                        <li key={product.name}>
                        <p to={`/product/${product.name}`}>{product.name}</p>
                        </li>
                    ))}
                    </ul>
                </li>
            ) 
            : category === 'incenses' ? (
                <li>
                    <Link to='incenses'>Incenses</Link>
                    <ul>
                    {allProducts.filter(product => product.category === 'incense').map(product => (
                        <li key={product.name}>
                        <p to={`/product/${product.name}`}>{product.name}</p>
                        </li>
                    ))}
                    </ul>
                </li>
            ) 
            : null }
            </ul>
        </div>
    );
  };

export default Sidebar;


