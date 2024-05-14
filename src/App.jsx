import { useState } from 'react'
import Layout from './pages/Layout'
import { Routes, Route } from 'react-router-dom';
import DetailedPage from './pages/DetailedPage';
import './App.css'

function App() {
  const[selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailedPage, setShowDetailedPage] = useState(false);
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} showDetailedPage={showDetailedPage} setShowDetailedPage={setShowDetailedPage}/> }>
          <Route path='crystals' element={<DetailedPage product={selectedProduct}/>} />
          <Route path='essentialoils' element={<DetailedPage product={selectedProduct}/>} />
          <Route path='incenses' element={<DetailedPage product={selectedProduct}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
