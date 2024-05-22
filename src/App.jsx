import { useState } from 'react'
import Layout from './pages/Layout'
import './App.css'

function App() {
  const[selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <>
      <Layout selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
    </>
  )
}

export default App
