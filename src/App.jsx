import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home';
import Crystals from './pages/Crystals';
import EssentialOils from './pages/EssentialOils';
import Incenses from './pages/Incenses';
import './App.css'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='crystals' element={<Crystals />}/>
          <Route path='essentialoils' element={<EssentialOils />}/>
          <Route path='incenses' element={<Incenses />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
