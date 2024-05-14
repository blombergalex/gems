import { useState } from 'react'
import Layout from './pages/Layout'
import { Routes, Route } from 'react-router-dom';
import DetailedPage from './pages/DetailedPage';
import './App.css'

function App() {
  const[selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/> }>
          <Route path='crystals' element={<DetailedPage/>} />
          <Route path='essentialoils' element={<DetailedPage/>} />
          <Route path='incenses' element={<DetailedPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
