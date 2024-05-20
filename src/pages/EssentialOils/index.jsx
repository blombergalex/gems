import Layout from '../Layout';
import Sidebar from '../../components/Sidebar';
import ShortSummary from '../../components/ShortSummary';
import { useState } from 'react';

const EssentialOils = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullSummary, setShowFullSummary] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowFullSummary(false);
  };

  const toggleFullSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  return (
    <Layout selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}>
      <Sidebar handleProductClick={handleProductClick} />
      {selectedProduct && !showFullSummary ? (
        <ShortSummary product={selectedProduct} toggleFullSummary={toggleFullSummary} />
      ) : null}
    </Layout>
  );
};

export default EssentialOils;
