import { Link, NavLink } from "react-router-dom";
import { allProducts } from "../../data/data";
import { useEffect } from "react";
import scrollToTop from "../../assets/functions";
import styles from './Sidebar.module.css'

const Sidebar = ({productCategory, setProductCategory}) => {
    // {category, handleCategoryChange, selectedProduct, setSelectedProduct, backToShortSummary}
    useEffect(() => {
        scrollToTop();
      }, [selectedProduct, category]);


    // const handleProductClick = (product) => {
    //     if (selectedProduct === product && productCategory === product.category) {
    //         setProductCategory(product.category);
    //         setSelectedProduct(null);
    //         backToShortSummary();
    //     } else if (selectedProduct === ProductCategory) {
    //         setSelectedProduct(null);
    //         handleCategoryChange(home);
    //         backToShortSummary();
    //     } else {
    //         setSelectedProduct(product);
    //         backToShortSummary();
    //     } 
    // };

    const crystalList = () => {
        return allProducts.filter(product => product.category === 'crystals').map(product => (
            <div key={product.name}>
                <p onClick={() => handleProductClick(product)}>{product.name}</p>
            </div>
        ))
    }
    
    const essentialoilsList = () => {
        return allProducts.filter(product => product.category === 'incenses').map(product => (
            <div key={product.name}>
                <p onClick={() => handleProductClick(product)}>{product.name}</p>
            </div>
        ))
    }

    const incenseList = () => {
        return allProducts.filter(product => product.category === 'essentialoils').map(product => (
            <div key={product.name}>
                <p onClick={() => handleProductClick(product)}>{product.name}</p>
            </div>
        ))
    }

    return(
        <div className={styles.sidebar}>
                {category === 'home' ? (
                    <>
                        <div>
                            <Link to='crystals' className={styles.category} onClick={() => handleCategoryChange('crystals')}>Crystals</Link>
                            <div>{crystalList()}</div>
                        </div>
                        <div>
                            <Link to='essentialoils' className={styles.category}  onClick={() => handleCategoryChange('essentialoils')}>Essential Oils</Link>
                            <div>{essentialoilsList()}</div>
                        </div>
                        <div>
                            <Link to='incenses' className={styles.category} onClick={() => handleCategoryChange('incenses')}>Incenses</Link>
                            <div>{incenseList()}</div>
                        </div>
                    </>
                ) : category === 'crystals' ? (
                    <div>
                        <Link to='crystals' className={styles.category} onClick={() => handleCategoryChange('crystals')}>Crystals</Link>
                        <div>{crystalList()}</div>
                        <NavLink to='/' className={styles.category} onClick={() => handleCategoryChange('home')}>&#8617;</NavLink>
                    </div>
                ) : category === 'essentialoils' ? (
                    <div>
                        <Link to='essentialoils' className={styles.category} onClick={() => handleCategoryChange('essentialoils')}>Essential Oils</Link>
                        <div>{incenseList()}</div>
                        <NavLink to='/' className={styles.category} onClick={() => handleCategoryChange('home')}>&#8617;</NavLink>
                    </div>
                ) : category === 'incenses' ? (
                    <div>
                        <Link to='incenses' className={styles.category} onClick={() => handleCategoryChange('incenses')}>Incenses</Link>
                        <div>{essentialoilsList()}</div>
                        <NavLink to='/' className={styles.category} onClick={() => handleCategoryChange('home')}>&#8617;</NavLink>
                    </div>
                ) : null }
        </div>
    );
  };

export default Sidebar;