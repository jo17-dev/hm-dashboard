import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import StoreData from './pages/admin/StoreData.tsx'
import Inventory from './pages/admin/Inventory.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/admin/dashboard' element={<StoreData/>} />
        <Route path='/admin/inventory' element={<Inventory/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
