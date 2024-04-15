import { Link } from "react-router-dom";
import { allProducts } from "../../data/data";

const Sidebar = ({category}) => {

    const filteredProducts = allProducts.filter(product => product.category === category);

    return(
        <div>
            <h2>Products</h2>
            <ul>
            {category === 'home' ? (
                <>
                <li>
                    <h3>Crystals</h3>
                    <ul>
                    {allProducts.filter(product => product.category === 'crystal').map(product => (
                        <li key={product.name}>
                        <Link to={`/product/${product.name}`}>{product.name}</Link>
                        </li>
                    ))}
                    </ul>
                </li>
                <li>
                    <h3 >Essential Oils</h3>
                    <ul>
                    {allProducts.filter(product => product.category === 'essential oil').map(product => (
                        <li key={product.name}>
                        <Link to={`/product/${product.name}`}>{product.name}</Link>
                        </li>
                    ))}
                    </ul>
                </li>
                <li>
                    <h3>Incenses</h3>
                    <ul>
                    {allProducts.filter(product => product.category === 'incense').map(product => (
                        <li key={product.name}>
                        <Link to={`/product/${product.name}`}>{product.name}</Link>
                        </li>
                    ))}
                    </ul>
                </li>
                </>
            ) : null}
            </ul>
        </div>
    );
  };

export default Sidebar;