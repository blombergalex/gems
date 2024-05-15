import { useState } from 'react'
import Layout from './pages/Layout'
import Intro from './components/Intro';
import './App.css'

function App() {
  const[selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <>
      <Intro />
      <Layout selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
    </>
  )
}

export default App
